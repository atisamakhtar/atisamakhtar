"""Extract reviews from saved Fiverr profile HTML into src/lib/content/fiverr-reviews.json."""
import json
import sys
from pathlib import Path

html_path = Path(sys.argv[1] if len(sys.argv) > 1 else r"C:\Users\Xeven\AppData\Local\Temp\fiverr2.html")
html = html_path.read_text(encoding="utf-8", errors="ignore")

marker = '{"rollouts":'
start = html.find(marker)
if start == -1:
    print("rollouts block not found")
    sys.exit(1)

depth = 0
i = start
while i < len(html):
    ch = html[i]
    if ch == "{":
        depth += 1
    elif ch == "}":
        depth -= 1
        if depth == 0:
            end = i + 1
            break
    i += 1
else:
    print("could not find JSON end")
    sys.exit(1)

blob = json.loads(html[start:end])
reviews_data = blob.get("reviewsData", {})
if isinstance(reviews_data, dict):
    reviews = reviews_data.get("reviews")
    if not isinstance(reviews, list):
        buying = reviews_data.get("buying_reviews")
        reviews = buying if isinstance(buying, list) else []
    total = reviews_data.get("total_count") or reviews_data.get("totalCount") or len(reviews)
else:
    reviews = []
    total = 0

print(f"Extracted {len(reviews)} of {total} public reviews")

out = Path(__file__).resolve().parents[1] / "src/lib/content/fiverr-reviews.json"
out.write_text(json.dumps(reviews, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"Wrote {out}")

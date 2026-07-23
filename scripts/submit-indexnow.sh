#!/bin/bash
# Submit all sitemap URLs to IndexNow (Bing, and other participating engines) so new/updated
# pages get crawled fast instead of waiting for the next scheduled crawl.
#
# Usage: ./scripts/submit-indexnow.sh
# Run this after publishing or updating any page. Free, no API key/account needed beyond
# the key file already hosted at the site root.

set -euo pipefail

HOST="earthoneaccounting.com"
KEY="56d0a5b692d040ea8c8db17e7805d37f"
KEY_LOCATION="https://${HOST}/${KEY}.txt"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITEMAP="${SCRIPT_DIR}/../sitemap.xml"

URLS=$(grep -oE '<loc>[^<]+</loc>' "$SITEMAP" | sed -E 's/<\/?loc>//g' | python3 -c '
import json, sys
print(json.dumps([line.strip() for line in sys.stdin if line.strip()]))
')

curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{\"host\":\"${HOST}\",\"key\":\"${KEY}\",\"keyLocation\":\"${KEY_LOCATION}\",\"urlList\":${URLS}}" \
  -w "\nHTTP %{http_code}\n"

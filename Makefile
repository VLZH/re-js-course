crawler:
	docker run -it --env-file=./algolia.env -e "CONFIG=$$(cat ./algolia.json | jq -r tostring)" algolia/docsearch-scraper >> ./logs/$$(date).log
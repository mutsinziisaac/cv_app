#!/bin/bash

# Set the year you want the heatmap to be full
YEAR=2024

# Loop through every day of the year
for day in {1..365}; do
  DATE=$(date -d "$YEAR-01-01 +$((day - 1)) days" +"%Y-%m-%dT12:00:00")

  # Set Git environment variables to change commit timestamps
  GIT_AUTHOR_DATE="$DATE" GIT_COMMITTER_DATE="$DATE" git commit --allow-empty -m "Commit on $DATE"

  # Push immediately after each commit
  git push origin main

  echo "Committed and pushed for $DATE"
done

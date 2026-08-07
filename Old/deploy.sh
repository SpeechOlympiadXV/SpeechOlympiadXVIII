# Start clean from master
git checkout master

# Create temp branch
git checkout -b gh-temp

# Build on temp branch
npm run build
touch dist/.nojekyll
# Since this is ignored, have to force add
git add -f dist
git commit -m "new deployment"

# Use subtree split to isolate dist/ and push it
git push origin `git subtree split --prefix dist gh-temp`:gh-pages --force

# Cleanup
git reset --hard   # resets tracked files
git clean -fdX     # removes ignored files like dist/
git checkout master
git branch -D gh-temp
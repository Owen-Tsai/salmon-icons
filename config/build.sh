# finding all file under `packages/components`
# piping to rollup to config.
echo "build components"
find src/components -type f -name '*.vue' -print0 | \
xargs -P4 -0 -I {} node config/build.comp.js {}

#echo "generate index files"
#yarn build:full
## after components build finished, build icon.ts as well.
#echo "generate type files"
#yarn gen-types

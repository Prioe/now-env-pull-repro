# now-env-pull-repro

This is a minimal reproduction of the issue occuring when adding JSON data to Vercel environment.

## Behaviour

If I add a JSON string to my Vercel environment and pull it via `vc env pull`, certain characters are escaped (https://github.com/zeit/now/blob/f4d86cb9df757d1154a43549290b6d4a22b55caf/packages/now-cli/src/commands/env/pull.ts#L75) in the resulting file. This makes the resulting JSON invalid.

I was also able to produce this behaviour with https://github.com/zeit/next.js and any node-script using https://github.com/motdotla/dotenv.

## Steps to reproduce

```bash
$ vc # link to a project
$ vc env add REACT_APP_DEMO development < demo.json
$ vc env pull
```

I've added 2 examples of what this behaviour might result in:

1. I'm trying to parse the `REACT_APP_DEMO` environment variable in `App.js` which fails.
2. I'm rendering the `REACT_APP_DEMO` environment variable in `App.js` which displays multiple `\`.
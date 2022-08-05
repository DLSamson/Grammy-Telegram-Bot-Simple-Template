# Grammy Telegram Bot Simple Template

This is a template of telegram bot using grammy.

You may use it to start development, if don't know, what files structure you may be needed.

To start working run these commands:

```bash
npm install
tsc
npm run start
```

And create a config file `config/defualt.json`, example you can see in `config/example.json`

If you having some issues, try installing nodemon and typescript globally

```bash
npm i -D nodemon
npm i -D typescript
```

For development you may need a few terminal sessions

```bash
tsc --watch
&&
nodemon
```

---

> Well, I would like to make some scripts like `npm run dev`, `npm run build` and `npm run start`, to make it watch, compile and run files in a one terminal session, but I'm having some issues.       
>
>Probably I'll add them in the future
<h1>Portfolio Site Documentation</h1>

<p>Dependencies</p>

```bash
npm install
npm install styled-components @types/styled-components
npm install @fontsource/inter
npm install framer-motion
```

<p>Dev/Prod Environment</p>

```bash
npx create-next-app@latest yammei --typescript
npm run dev
npm run build
npm start
```

<p>Deployment</p>

```bash
gcloud run deploy
```

Notes: Server to be deployed in any us-west location. <br>

[June 24, 2024] Update: 
Tailwind <b>sucks</b>. 
It's better to just use your own pre-defined styles. 
I don't know why nano-syntaxed CSS won't take dynamic values. 
I will die on this hill!!
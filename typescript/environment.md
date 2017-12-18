
# Instalação de pacotes

```
sudo npm install -g @angular/cli
  ng -v
```

```
sudo npm install -g typescript
  tsc -v
```

Para compilar de modo stand alone ->

```
tsc arquivo.ts
```

Para compilar de modo automático pelo atom, adicionar ao arquivo **tsconfig.json** do projeto:

```
{
  "compileOnSave": true,
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

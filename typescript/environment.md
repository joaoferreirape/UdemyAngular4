# Arquivos de configurações

## Configuração do repositório git e comandos

### Salvar localmente as configurações de usuário e senha (credenciais)
```
git config --local credential.helper 'store'
```

### Enviar alterações

```
git add .
git commit -m "Curso de Angular 4"
git push origin master
```

## Instalação de pacotes

Pacote principal do angular/cli
```
sudo npm install -g @angular/cli
  ng -v
```

Pacote de compilação do typescript
```
sudo npm install -g typescript
  tsc -v
```

Para compilar de modo stand alone
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

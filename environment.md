# Arquivos de configurações e comandos

## Configuração do repositório e comandos git

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
// Verificar versão
ng -v
```

Pacote de compilação do typescript
```
sudo npm install -g typescript
// Verificar versão
tsc -v
```

Para compilar um arquivo typescript de modo stand-alone
```
tsc arquivo.ts
```

Para compilar de modo automático pelo atom, adicionar ao arquivo **tsconfig.json** do projeto
```
{
  "compileOnSave": true,
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

## Rodar o aplivativo

```
ng serve --progress --verbose --watch
```

## Criar um novo componente

```
ng generate component nomeComponente --spec=false
```
ou, na forma reduzida
```
ng g c nomeComponente --spec=false
```
a diretiva --spec=false é usada para não gerar os arquivos de teste

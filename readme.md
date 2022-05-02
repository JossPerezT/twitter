# Proyecto 3 Twitter

Semana 3 en LaunchX. Este proyecto contendrá el proyecto 3, 4 y 5.

## Estructura del proyecto
```mermaid 
stateDiagram-v2
[*] --> app
[*] --> test


app --> model
app --> service
app --> view

model --> User.js
service --> UserServices.js
view --> UserViwes.js


test --> models 
test --> services
test --> views

models --> User.test.js
services --> UserServices.test.js
views --> UserViwes.test.js


User.test.js --> [*]
UserServices.test.js --> [*]
UserViwes.test.js --> [*]

User.js --> [*]
UserServices.js --> [*]
UserViwes.js --> [*]
```

- Cada archivo contiene sus TDD correspondientes 


## Dependencias 
[Jest](jestjs.io/)

# Curso de GraphQL - Platzi

Proyecto de aprendizaje en el Curso básico de GrahpQL de Platzi

## Aliases

Ayudan a ejecutar varias queries al mismo tiempo teniendo un nombre que las identifica

```
query {
    allCourses: getCourses {
        title
        teacher
        topic
        people {
            name
            email
        }
    }

    allStudents: getStudents {
        _id
        name
        email
    }

    studentOne: getStudent(_id: "5e9e5ddb06672b2afd8110ac") {
        name
        email
    }

    studentTwo: getStudent(_id: "5e9e5de506672b2afd8110ad") {
        name
        email
    }
}
```

## Fragments

Ayudan a pasar parámetros que se repiten en varias consultas para no duplicar código

```
query {
    allCourses: getCourses {
        title
        teacher
        topic
        people {
            ...defaults
        }
    }

    allStudents: getStudents {
        _id
        ...defaults
    }

    studentOne: getStudent(_id: "5e9e5ddb06672b2afd8110ac") {
        ...defaults
    }

    studentTwo: getStudent(_id: "5e9e5de506672b2afd8110ad") {
        ...defaults
    }
}

fragments defaults on Student {
    name
    email
}
```

## Variables

Permite hacer reutilizables las consultas al ejecutarse por medio de variables que se pasan por medio de objetos JSON

```
mutation addPersonToCourse($course: ID!, $person: ID!) {
    addPeople(courseID: $course, personID: $person) {
        _id
        title
    }
}
```

```json
{
    "course": "5e9ddbcf5cf2f5221612a741",
    "person": "5e9e5ddb06672b2afd8110ac"
}
```

## Directivas

- include
- skip
- deprecated

### @inlcude

Permite incluir valores de consulta si se cumple una condición

```
query getPeopleData($monitor: Boolean!) {
    getPeople {
        _id
        name
        email
        ... on Monitor @include(if: $monitor) {
            phone
        }
    }
}
```

```json
{
    "monitor": "true"
}
```

### @deprecated

Le indica al cliente que aunque un campo esté habilitado, no tendrá soporte a largo plazo

```
type Course {
    _id: ID!
    title: String!
    teacher: String
    description: String!
    topic: String @deprecated
}
```

## Clientes

- fetchql
- graphql-request
- apollo-client (el más completo)
- relay  (oficial de Facebook con React)
- vue apollo
- apollo angular


### [FetchQL](https://www.npmjs.com/package/fetchql)

Tiene un objeto de configuración donde se introduce todas los requerimientos que necesita un query

### [graphql-request](https://www.npmjs.com/package/graphql-request)

Se puede usar tanto en node como en un aplicativo de front. Es el más sencillo de usar.

### [Apollo client](https://www.npmjs.com/package/apollo-client)

Es un cliente muy completo pues tiene los mismos usos que graphql-request, pero se puede manejar caché de query, uso de promesas, entre otros.

### [Relay](https://relay.dev/)

Es un cliente orientado a integrar el front. es usado por Facebook de manera oficial para conectar con graphql.

### [Vue Apollo](https://apollo.vuejs.org/)

Cliente para conectar aplicaciones Vue

### [Apollo Angular](https://www.apollographql.com/docs/angular/)

Cliente para conectar aplicaciones Angular
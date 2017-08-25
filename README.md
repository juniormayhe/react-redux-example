This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Goals

- create a simple react app following this guide [here](http://redux.js.org/docs/basics/ExampleTodoList.html)
- Allow user to add tasks to a list of tasks
- Filter tasks to show all, active or completed

## Components
	
### Actions

- index: declares actions for adding task, change task filter and toggling task status

### Components

- App: root node to be rendered, which contains list of tasks
- Footer: show options for filtering tasks
- Link: individual link corresponding to each filter type: show all, active or completed
- ListaTareas: renders a set of tasks containing one or more Tarea components
- Tarea: individual task component for redering task name, task status and attaching onClick

### Containers

- AgregarTarea: another visual component but with dispatcher for executing an action to add task
- LinkFiltro: container that passes state and props to Link component
- ListaTareasVisible: container for filtering tasks that passes state and props to ListaTareas component


### Reducers

- filtroVisibilidad: handle filter for filtering tasks, returning selected filter
- tareas: handle add task and toggle a selected task, returning a new task
- index: bundles all reducers into tareasApp

## Folder Structure

After creation, your project should look like this:

```
react-redux-example/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
	actions/
		index.js
	components/
		App.js
		Footer.js
		Link.js
		ListaTareas.js
		Tarea.js
	containers/
		AgregarTarea.js
		LinkFiltro.js
		ListaTareasVisible.js
	reducers/
		filtroVisibilidad.js
		index.js
		tareas.js
	index.css
	index.js
```
where `src/index.js` is the JavaScript entry point.

## Available Scripts

To start the project, you must have installed npm, than run:

### `npm start`

which runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
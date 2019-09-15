# insta-links


## React App (from create-react-app)

./client/

It proxyes the requests to backend:
- if the url starts with `/static/`; serve the static file
- if header is `Accept: text/html`; handle in this app
- if not, proxy it to the server

On dev-mode, uses PORT 3000.

## Server

./server/

On dev-mode, uses PORT 5000.

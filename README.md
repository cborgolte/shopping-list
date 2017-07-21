# shopping-list

A multi user, multi device, concurrent shopping list. <br>
A (most of the time) working example can be found on https://grocery-list.de

## ![edit](docs/img/ic_mode_edit_black_24dp_2x.png "edit mode") Edit mode

In edit mode, you keep all items collected.
Here you can add new line items, change the quantities of existing ones or delete them.
By enabling the checkbox, line items are selected for the shopping view.

## ![store](docs/img/ic_store_black_24dp_2x.png "shopping mode") Shopping mode

This is a typical todo-list, where items can be marked as 'in the cart'.
Clicking the 'done' button will remove all selected items from this list.

## collaborative shopping

When logged in with the same credentials, multiple users can use the same list simultaneously.

## Quickstart Installation

    # Install hoodie
    npm install

    # Install everything needed by the angular app
    cd ng-src
    npm install
    cd ..

    # Set the Caddyfile to be used (development version here)
    cd caddy
    ln -s Caddyfile.dev Caddyfile
    cd ..

    # Build the docker image for our app
    sh docker_build.sh

    # Run the whole stack (couchdb, hoodie-app, caddy server)
    docker-compose up

------------------------------------
Created with [hoodie](https://github.com/hoodiehq), [Angular](https://angular.io/), [Angular Material](https://material.angular.io/)

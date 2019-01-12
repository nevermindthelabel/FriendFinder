module.exports = {
    "extends": [
        "airbnb-base",
        "prettier"
    ],
    "rules": {
        "no-console": 0,
        "no-use-before-define": 0,
        "no-plusplus": 0,
    },
    "env": {
        "node": true,
        "browser": true
    },
    "plugins": [
        "prettier",
        "html"
    ],
    "settings": {
        "html/indent": "+2"
    }

}
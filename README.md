# epic

A JavaScript Markdown editor for [Meteor](https://github.com/meteor/meteor), using [EpicEditor](https://github.com/OscarGodson/EpicEditor).

## Installation

    meteor add d4nyll:epic

## Usage

As you may have noticed, the package version is at `0.1.0-alpha`, which means it is still under **active development**. The API is not guaranteed to stay the same. It is highly **NOT** recommended to use this for production.

To use `d4nyll:epic`, simply add `{{> epic}}` inside the your template. The editor will append a template to where the placeholder is. A textarea with a class and id of `epicarea` will also be added, and syncs with the editor. You can retrieve the value of the editor from this textarea.

### Options

You may use a Meteor template helper to define an object which can be passed to `epic` using `{{> epic obj}}`, where `obj` is the object. You can specify the [same set of options](https://github.com/OscarGodson/EpicEditor#epiceditoroptions) as EpicEditor. 

[![Build Status](https://travis-ci.org/d4nyll/epic.svg?branch=master)](https://travis-ci.org/d4nyll/epic)

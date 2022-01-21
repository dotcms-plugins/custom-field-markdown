# Markdown Custom Field for dotCMS

This provides a react based dotCMS custom field that leverages the excellent Rich Markdown Editor found here: https://github.com/outline/rich-markdown-editor

## Steps:

1. Clone and build the this repo
2. Upload the resulting `./custom-field-markdown` folder into dotCMS as `/application/custom-field-markdown`.
3. Create the `Custom Field`
4. Create a content based on the new `Custom Field`


### 1. Clone and build the [ReactJS app](https://reactjs.org/)

- A) In your terminal git clone the dotCMS Custom Field - React Markdown Editor App:
```
git clone https://github.com/dotcms-plugins/custom-field-markdown.git;
```

- B) Install dependencies
```
cd custom-field-markdown;
 yarn install
```

- C) Build your ReactJS App:
```
 yarn build
```
This builds the application to a new folder named `custom-field-markdown`

### 2. Upload the build folder (`custom-field-markdown`) into dotCMS
- upload new `custom-field-markdown` folder into your DotCMS server, to path: 
```/application/custom-field-markdown```

### 3. Create the Custom Field
- Go to `Content Model` --> `Content Types` and or edit a type of `Content`
- Add a `Custom Field` to this content type and set a `Name` (the Name must be unique). E.g. **Markdown**
- In the `Value` field you need to set the path of the VTL file (uploaded on Step 2). E.g. 
`#dotParse("/application/custom-field-markdown/custom-field.vtl")`

### 4. Create a content based on the new `Custom Field`
- A) Go to `Content` --> `Search` and add a new piece of Content. You should see the markdown field displayed.  Insure that you can save and edit content using the new markdown field.
# Markdown Custom Field for dotCMS

This provides a react based dotCMS custom field that leverages the excellent Rich Markdown Editor found here: https://github.com/outline/rich-markdown-editor.  you can get started using it by just uploading 





## Steps to Build:

1. Clone this repo
2. Customize and Build (Optional)
3. Upload the resulting `./custom-field-markdown` folder into dotCMS as `/application/custom-field-markdown`.
4. Create the `Custom Field`
5. Create a content based on the new `Custom Field`


### 1. Clone this repo

- A) In your terminal git clone the dotCMS Custom Field - React Markdown Editor App:
```
git clone https://github.com/dotcms-plugins/custom-field-markdown.git;
```

### 2. Customize and Build (Optional)
You can skip this step if you just want to run the pre-packaged plugin.

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

### 3. Upload the folder (`custom-field-markdown`) into dotCMS
- upload new `custom-field-markdown` folder into your dotCMS server, to path: 
```/application/custom-field-markdown```

### 4. Create the Custom Field
- Go to `Content Model` --> `Content Types` and or edit a type of `Content`
- Add a `Custom Field` to this content type and set a `Name` (the Name must be unique). E.g. **Markdown**
- In the `Value` field you need to set the path of the VTL file (uploaded on Step 2). E.g. 
`#dotParse("/application/custom-field-markdown/custom-field.vtl")`

### 5. Create a content based on the new `Custom Field`
- A) Go to `Content` --> `Search` and add a new piece of Content. You should see the markdown field displayed.  Insure that you can save and edit content using the new markdown field.

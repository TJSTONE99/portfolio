import React from 'react';
// When you add the ckeditor5 folder you can import it this way
import editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const editorConfiguration = {
  placeholder: 'Blog here...',
  removePlugins: ['Title']
};


export default function Editor() {
  return (
    <CKEditor
      editor={ editor }
      config={ editorConfiguration }
      data=""
      onChange={ ( event, editor ) => {
        const data = editor.getData();
        console.log( { event, editor, data } );
      } }
      onReady={(editor) => {
        editor.editing.view.change((writer) => {
          writer.setStyle(
            'height',
            '500px',
            editor.editing.view.document.getRoot()
          );
        });
      }}
    />
  );
}
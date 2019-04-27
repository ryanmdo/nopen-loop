import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


class MarkdownEditor extends Component {
  constructor(props) {

    super(props);

    this.state = {
      // editorState: EditorState.createEmpty(),
      editable: true,
    };

  }


  //     const buttonStyle = this.props.closeHidden ? {display:'none'} : {};





  render() {
    const { editorState } = this.props.editorState;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
        toolbar={{
            options: ['inline', 'list',],
            inline: {
                options: ['bold', 'italic', 'underline', 'strikethrough'],
                bold: { className: 'bordered-option-classname' },
                italic: { className: 'bordered-option-classname' },
                underline: { className: 'bordered-option-classname' },
                strikethrough: { className: 'bordered-option-classname' },
                    },
        }}
      />
    )
  }
}

export default MarkdownEditor;

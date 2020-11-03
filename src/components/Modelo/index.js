import { Button } from "@material-ui/core";
import { DropzoneDialog } from "material-ui-dropzone";
import React, { useState } from "react";
import { instance } from "services/api";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Modelo() {
  const [open, setOpen] = useState(false);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  return (
    <div id="drod_zone">
      <div>
        <div>
          {/* <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
            config={{
              toolbar: [
                "heading",
                "|",
                "bold",
                "italic",
                "link",
                "bulletedList",
                "numberedList",
                "blockQuote",
              ],
              heading: {
                options: [
                  {
                    model: "paragraph",
                    title: "Paragáfo",
                    class: "ck-heading_paragraph",
                  },
                  {
                    model: "heading1",
                    view: "h1",
                    title: "titulo 1",
                    class: "ck-heading_heading1",
                  },
                  {
                    model: "heading2",
                    view: "h2",
                    title: "titulo 2",
                    class: "ck-heading_heading2",
                  },
                ],
              },
            }}
          /> */}
        </div>
        <Button onClick={() => setOpen(true)}>Add Image</Button>
        <DropzoneDialog
          open={open}
          onSave={async (files) => {
            console.log();

            setOpen(false);
            var data = new FormData();
            data.append("uwu", files[0], files[0].name);
            // data.append("data", );

            // console.log(await files[0].arrayBuffer());
            // var encodedString = btoa(data);
            console.log("{ ababa: toBase64(files[0]) }", {
              ababa: await toBase64(files[0]),
            });

            instance
              .post(
                "/safety/epi/convert/convertDocToPdf",
                { ababa: await toBase64(files[0]) },
                {
                  headers: {
                    "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
                  },
                  timeout: 30000,
                }
              )
              .then((reponse) => console.log(reponse));
          }}
          // acceptedFiles={['application/vnd.openxmlformats-officedocument.wordprocessingml.document']}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
}

import { Button } from "@material-ui/core";
import { DropzoneDialog } from "material-ui-dropzone";
import React, { useState } from "react";
import { instance } from "services/api";

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

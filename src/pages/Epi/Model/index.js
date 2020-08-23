import React from "react";
import MUIRichTextEditor from "mui-rte";
import TableChartIcon from "@material-ui/icons/TableChart";

const MyBlock = (props) => {
  return (
    <div
      style={{
        padding: 10,
        backgroundColor: "#ebebeb",
      }}
    >
      My Block content is:
      {props.children}
    </div>
  );
};

export default function Model() {
  return (
    <div>
      <MUIRichTextEditor
        label="Start typing..."
        controls={["my-block"]}
        customControls={[
          {
            name: "my-block",
            icon: <TableChartIcon />,
            type: "block",
            blockWrapper: <MyBlock />,
          },
        ]}
        autocomplete={{
          strategies: [
            {
              items: [
                {
                  keys: ["face", "grin"],
                  value: "{{NomeFuncionário}}",
                  content: (
                    <img src="https://i.pinimg.com/originals/50/77/04/50770411adf0bd85919b46a54b6be20d.jpg" />
                  ),
                },
              ],
              triggerChar: "/",
            },
          ],
        }}
        onSave={(data) => console.log("data", data)}
      />
    </div>
  );
}

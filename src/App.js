import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TreeView from "./tree-view";

function App() {
  return (
    <div className="App">
      <TreeView.Main options={options}>
        {args => (
          <TreeView.Wrapper>
            <TreeView.HeaderElement {...args} />
            <TreeView.RootElement {...args} />
            <TreeView.FooterElement {...args} />
          </TreeView.Wrapper>
        )}
      </TreeView.Main>
    </div>
  );
}

export default App;

const options = [
  "folder1/sub dir/file 1.docx",
  "folder1/sub dir/file 2.docx",
  "folder1/sub dir/file 3.docx",
  "folder2/sub dir/file 4.docx",
  "folder2/sub dir/file 5.docx",
  "folder2/sub dir/sub sub dir/file 6.docx",
  "folder2/sub dir/sub sub dir/file 7.docx",
  "folder3/file 8.docx",
  "folder3/file 9.docx",
  "folder3/file 10.docx",
  "file 11.docx",
  "file 11.docx",
  "file 11.docx"
];

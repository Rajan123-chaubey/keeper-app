import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


// function createNote(Entry){
//   return <Note 
//     key = {Entry.id}
//     title={Entry.title}
//     content={Entry.content}
//   />;
// }

function App() {
  return (
    <div>
      <Header />
   <div>
     {notes.map(Entry =>
     <Note 
    key = {Entry.id}
    head={Entry.title}
    body={Entry.content}
  /> )}
   </div>
      <Footer />
    </div>
  );
}

export default App;

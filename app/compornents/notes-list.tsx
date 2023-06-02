import React from 'react';
import { Database } from '../../database.types';
import { format } from 'date-fns';

type Note = Database['public']['Tables']['notes']['Row'];

const fetchNotes = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: 'no-store',
    // next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error('Faild to fetch data in server');
  }
  const notes: Note[] = await res.json();
  return notes;
};

const NoteList = async () => {
  const notes = await fetchNotes();
  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        Notes
      </p>
      <ul className="mr-3">
        {notes.map((note) => (
          <li key={note.id}>
            <p>{note.title}</p>
            <p>
              <strong className="mr-3">Created at:</strong>
              {note && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;

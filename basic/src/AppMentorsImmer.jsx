// yarn add immer use-immer
import React, { useState } from 'react';
import {useImmer} from 'use-immer'

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      if (mentor) {
        mentor.name = current;
      } else {
        alert('해당 멘토를 찾을 수 없습니다.');
      }
    })
  };

  const handleAdd = () => {
    const name = prompt(`추가할 멘토의 name ?`);
    const title = prompt(`추가할 멘토의 title ?`);
    updatePerson((person) => { 
      person.mentors.push({ id: Date.now(), name, title});
    });
  };

  const handleDelete = () => {
    const name = prompt(`삭제할 멘토 name ?`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      if (index !== -1) {
        person.mentors.splice(index, 1);
      } else {
        alert('해당 멘토를 찾을 수 없습니다.');
      }
    })
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}


const initialPerson = {
  name: '현준',
  title: '개발자',
  mentors: [
    {
      id: 1,
      name: 'Brendan Eich',
      title: 'Js 개발자',
    },
    {
      id: 2,
      name: 'FaceBook',
      title: 'React',
    },
  ],
}
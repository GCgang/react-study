import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
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
  });
  console.log(person);
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
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return {...mentor, name: current};
              }
              return mentor;
            }),
          }));
        }}
      >
        멘토의 이름을 바꾸기
      </button>
    </div>
  );
}

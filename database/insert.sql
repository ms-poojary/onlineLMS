-- domain table

INSERT INTO `domain`(`DOMAIN_ID`, `DOMAIN_NAME`, `DESCRIPTION`, `IMAGE`) VALUES
 ('1','Front End Development','Enjoy creating the user interface and experience of websites or applications',
 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

 INSERT INTO `domain` (`DOMAIN_ID`, `DOMAIN_NAME`, `DESCRIPTION`, `IMAGE`) VALUES
  ('2', 'Backend Development','delve into the intricate realms of server-side programming, to power the dynamic functionality  of websites.', 
 'https://media.istockphoto.com/id/1446702855/photo/neon-business-background-financial-stock-market-graphs-diagram-running-line-and-digits-at-the.jpg?s=612x612&w=0&k=20&c=ocfmAaY6gnpGc4_-icA4mCZsiTyBBLvpZVt4_4BVj8Q=');
 
INSERT INTO `domain` (`DOMAIN_ID`, `DOMAIN_NAME`, `DESCRIPTION`, `IMAGE`) VALUES 
('3', 'Cyber Security', 'The art of creatively exploring and manipulating computer systems and networks to uncover vulnerabilities',
 'https://plus.unsplash.com/premium_photo-1677093906053-037cef85dba4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGN5YmVyJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D');

 INSERT INTO `domain` (`DOMAIN_ID`, `DOMAIN_NAME`, `DESCRIPTION`, `IMAGE`) VALUES
  ('4', 'Biology', ' the scientific study of living organisms, delving into the wondrous complexities of evolution.',
  'https://plus.unsplash.com/premium_photo-1684993466316-81ae0b6c96ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGplbGx5JTIwZmlzaHxlbnwwfHwwfHx8MA%3D%3D');



   INSERT INTO `domain` (`DOMAIN_ID`, `DOMAIN_NAME`, `DESCRIPTION`, `IMAGE`) VALUES
    ('5', 'Environmental Science', 'Embark on a voyage of ecological enlightenment, navigating the intricate tapestry of our planet ecosystems', 
    'https://plus.unsplash.com/premium_photo-1669802766544-40eba66c4fa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW52aXJvbm1lbnR8ZW58MHx8MHx8fDA%3D');

-- courses
  INSERT INTO `course` (`DOMAIN_ID`, `COURSE_ID`, `COURSE_NAME`, `INST_ID`, `CRS_IMG`, `VEDIO`, `DURATION`) VALUES 
  ('1', '1', 'HTML', '1', 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D',
   'https://www.youtube.com/embed/HcOc7P5BMi4?si=y1cnYEZUGV5d8ssN', '2.05');
   
  INSERT INTO `course` (`DOMAIN_ID`, `COURSE_ID`, `COURSE_NAME`, `INST_ID`, `CRS_IMG`, `VEDIO`, `DURATION`) VALUES 
  ('1', '2', 'CSS', '1', 'https://tse3.mm.bing.net/th?id=OIP.GfozQbjmUZ9ujmiuPdyF6QHaHa&pid=Api&P=0&h=180',
   'https://www.youtube.com/embed/wRNinF7YQqQ?si=daRJVMUX712o7kpT', '7.18');
   
  INSERT INTO `course` (`DOMAIN_ID`, `COURSE_ID`, `COURSE_NAME`, `INST_ID`, `CRS_IMG`, `VmoEDIO`, `DURATION`) VALUES 
  ('1', '3', 'JavaScript', '1', 'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://www.youtube.com/embed/W6NZfCO5SIk?si=MkpoB6GPzwmAqaJE', '0.45');



   INSERT INTO `course` (`DOMAIN_ID`, `COURSE_ID`, `COURSE_NAME`, `INST_ID`, `CRS_IMG`, `VEDIO`, `DURATION`) VALUES
    ('2', '1', 'NodeJs', '1', 'https://media.istockphoto.com/id/1347542592/photo/node-js-inscription-against-laptop-and-code-background.webp?b=1&s=170667a&w=0&k=20&c=5aAhSVSeVQ-KdN_yzacnv58kKDiHsFJ4TuHyNGoVQyY=', 'https://www.youtube.com/embed/TlB_eWDSMt4?si=R32N-t2vhVwJUlSP', '1.18'),
    ('2', '2', 'Python', '1', 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://www.youtube.com/embed/vLqTf2b6GZw?si=qHZF3JSkY67Ari9g', '1.17');


  INSERT INTO `course` (`DOMAIN_ID`, `COURSE_ID`, `COURSE_NAME`, `INST_ID`, `CRS_IMG`, `VEDIO`, `DURATION`) VALUES
  ('3', '1', 'Ethical Hacking', '1', 'https://media.istockphoto.com/id/1133604495/photo/hacker-dark-face-using-laptop.webp?b=1&s=170667a&w=0&k=20&c=ZuO_7PL8xUDbC2HQETPHg4jcHJq_Tqlrmp8FeKZ6gfE=', 
  'https://www.youtube.com/embed/3FNYvj2U0HM?si=n-_1Vr8Psb3_qEOB', '7.14');

  INSERT INTO `course` (`DOMAIN_ID`, `COURSE_ID`, `COURSE_NAME`, `INST_ID`, `CRS_IMG`, `VEDIO`, `DURATION`) VALUES 
  ('4', '1', 'Zoology', '2', 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHpvb2xvZ3klMjBiaXJkc3xlbnwwfHwwfHx8MA%3D%3D',
   'https://www.youtube.com/embed/rbJ3H13yrTw?si=387YdeLNeSSfA9sw', '4.9');

   INSERT INTO `course` (`DOMAIN_ID`, `COURSE_ID`, `COURSE_NAME`, `INST_ID`, `CRS_IMG`, `VEDIO`, `DURATION`) VALUES 
   ('4', '2', 'Botany', '2', 'https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8', 
   'https://www.youtube.com/embed/8-G7D_sy7qE?si=g-2W4taXDKMLPDWZ', '5.6');
    
  INSERT INTO `course` (`DOMAIN_ID`, `COURSE_ID`, `COURSE_NAME`, `INST_ID`, `CRS_IMG`, `VEDIO`, `DURATION`) VALUES
  ('5', '1', 'Geography', '2', 'https://images.unsplash.com/photo-1663427929917-333d88949f7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
  'https://www.youtube.com/embed/HAJl4Sng0Kw?si=l06A6ppLcWeN66pd', '6.3');

UPDATE `course` SET `COURSE_DESC` = 'Embark on a digital odyssey, sculpting the virtual landscapes of tomorrow by mastering the language of the web, weaving intricate tapestries of interactivity and design.' WHERE `course`.`DOMAIN_ID` = 1 AND `course`.`COURSE_ID` = 1; UPDATE `course` SET `COURSE_DESC` = 'Embark on a chromatic journey, painting the digital canvas with hues of style and elegance, sculpting breathtaking web experiences that captivate the senses and inspire the imagination' WHERE `course`.`DOMAIN_ID` = 1 AND `course`.`COURSE_ID` = 2; UPDATE `course` SET `COURSE_DESC` = 'Wielding the language of interactivity and dynamism to breathe life into static web pages, crafting immersive digital realms where functionality dances with creativity.' WHERE `course`.`DOMAIN_ID` = 1 AND `course`.`COURSE_ID` = 3; UPDATE `course` SET `COURSE_DESC` = 'Harnessing the power of server-side JavaScript to sculpt dynamic, scalable, and lightning-fast web applications, ushering in a new era of digital innovation and efficiency.' WHERE `course`.`DOMAIN_ID` = 2 AND `course`.`COURSE_ID` = 1; UPDATE `course` SET `COURSE_DESC` = 'The elegant language of choice, empowers learners to craft solutions that transcend boundaries, ushering in a realm where simplicity meets sophistication.' WHERE `course`.`DOMAIN_ID` = 2 AND `course`.`COURSE_ID` = 2; UPDATE `course` SET `COURSE_DESC` = 'The art of digital chivalry, empowers virtuous seekers to traverse the digital frontier, safeguarding realms of data with noble intent and unwavering vigilance.' WHERE `course`.`DOMAIN_ID` = 3 AND `course`.`COURSE_ID` = 1; UPDATE `course` SET `COURSE_DESC` = 'The captivating study of earthly wonders, beckons learners to unravel the enchanting narratives of wildlife, charting the diverse paths of evolution.' WHERE `course`.`DOMAIN_ID` = 4 AND `course`.`COURSE_ID` = 1; UPDATE `course` SET `COURSE_DESC` = 'The vibrant study of plant life, invites learners to explore nature\'s green marvels, unlocking the secrets of growth and adaptation in Earth\'s verdant realms.' WHERE `course`.`DOMAIN_ID` = 4 AND `course`.`COURSE_ID` = 2; UPDATE `course` SET `COURSE_DESC` = 'The compass of exploration through the diverse landscapes of our world, unveiling the interconnected stories of place, people, and environment that shape our global tapestry.\"' WHERE `course`.`DOMAIN_ID` = 5 AND `course`.`COURSE_ID` = 1;







  UPDATE `course` SET `COURSE_DESC` = 'Embark on a digital odyssey, sculpting the virtual landscapes of tomorrow by mastering the language of the web, weaving intricate tapestries of interactivity and design.' WHERE `course`.`DOMAIN_ID` = 1 AND `course`.`COURSE_ID` = 1; UPDATE `course` SET `COURSE_DESC` = 'Embark on a chromatic journey, painting the digital canvas with hues of style and elegance, sculpting breathtaking web experiences that captivate the senses and inspire the imagination' WHERE `course`.`DOMAIN_ID` = 1 AND `course`.`COURSE_ID` = 2; UPDATE `course` SET `COURSE_DESC` = 'Wielding the language of interactivity and dynamism to breathe life into static web pages, crafting immersive digital realms where functionality dances with creativity.' WHERE `course`.`DOMAIN_ID` = 1 AND `course`.`COURSE_ID` = 3; UPDATE `course` SET `COURSE_DESC` = 'Harnessing the power of server-side JavaScript to sculpt dynamic, scalable, and lightning-fast web applications, ushering in a new era of digi[...]
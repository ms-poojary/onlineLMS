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




-- courses
  INSERT INTO `course` (`DOMAIN_ID`, `COURSE_ID`, `COURSE_NAME`, `INST_ID`, `CRS_IMG`, `VEDIO`, `DURATION`) VALUES 
  ('1', '1', 'HTML', '1', 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D',
   'https://www.youtube.com/embed/HcOc7P5BMi4?si=y1cnYEZUGV5d8ssN', '2.05');
   
  INSERT INTO `course` (`DOMAIN_ID`, `COURSE_ID`, `COURSE_NAME`, `INST_ID`, `CRS_IMG`, `VEDIO`, `DURATION`) VALUES 
  ('1', '2', 'CSS', '1', 'https://tse3.mm.bing.net/th?id=OIP.GfozQbjmUZ9ujmiuPdyF6QHaHa&pid=Api&P=0&h=180',
   'https://www.youtube.com/embed/wRNinF7YQqQ?si=daRJVMUX712o7kpT', '7.18');
   
  INSERT INTO `course` (`DOMAIN_ID`, `COURSE_ID`, `COURSE_NAME`, `INST_ID`, `CRS_IMG`, `VEDIO`, `DURATION`) VALUES 
  ('1', '3', 'JavaScript', '1', 'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://www.youtube.com/embed/W6NZfCO5SIk?si=MkpoB6GPzwmAqaJE', '0.45');



   INSERT INTO `course` (`DOMAIN_ID`, `COURSE_ID`, `COURSE_NAME`, `INST_ID`, `CRS_IMG`, `VEDIO`, `DURATION`) VALUES
    ('2', '1', 'NodeJs', '1', 'https://media.istockphoto.com/id/1347542592/photo/node-js-inscription-against-laptop-and-code-background.webp?b=1&s=170667a&w=0&k=20&c=5aAhSVSeVQ-KdN_yzacnv58kKDiHsFJ4TuHyNGoVQyY=', 'https://www.youtube.com/embed/TlB_eWDSMt4?si=R32N-t2vhVwJUlSP', '1.18'),
    ('2', '2', 'Python', '1', 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://www.youtube.com/embed/vLqTf2b6GZw?si=qHZF3JSkY67Ari9g', '1.17');
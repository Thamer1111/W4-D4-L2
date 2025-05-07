let student = [
    {name:"thamer", age:23 ,gender: "male", url:"https://images.pexels.com/photos/31829947/pexels-photo-31829947/free-photo-of-close-up-of-monstera-leaves-with-dew-drops.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {name:"sarah", age:25 ,gender: "female", url:"https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-waves-crashing-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {name:"Naif", age:28 ,gender: "male", url:"https://images.pexels.com/photos/31858376/pexels-photo-31858376/free-photo-of-ocean-waves-crashing-on-rocks-in-mar-del-plata.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {name:"fatmah", age:20 ,gender: "female", url:"https://images.pexels.com/photos/26871793/pexels-photo-26871793/free-photo-of-orange-wall-of-block-of-flats-under-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
]

let body = document.body

student.forEach(stu => {
    let h1 = document.createElement("h1");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let img = document.createElement("img");
    h1.innerText = `has name: ${stu.name}`;
    h4.innerText = `age : ${stu.age}`;
    p.innerText = `gender: ${stu.gender}`

    if(stu.gender == "male"){
        p.style.color = "blue"
    }else {
        p.style.color = "pink"
    }
    body.appendChild(h1);
    body.appendChild(h4);
    body.appendChild(p);
    img.src =stu.url;
    img.style.width= "50%";
    body.appendChild(img);
});
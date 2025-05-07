let student = [
    {name:"thamer", age:23 , url:"https://images.pexels.com/photos/31829947/pexels-photo-31829947/free-photo-of-close-up-of-monstera-leaves-with-dew-drops.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {name:"Fahad", age:25 , url:"https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-waves-crashing-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {name:"Naif", age:28 , url:"https://images.pexels.com/photos/31858376/pexels-photo-31858376/free-photo-of-ocean-waves-crashing-on-rocks-in-mar-del-plata.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {name:"Faris", age:20 , url:"https://images.pexels.com/photos/26871793/pexels-photo-26871793/free-photo-of-orange-wall-of-block-of-flats-under-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
]

let body = document.body

student.forEach(stu => {
    let img = document.createElement("img");
    img.src =stu.url;
    body.appendChild(img);
});
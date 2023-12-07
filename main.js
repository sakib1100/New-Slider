// const slider = document.querySelector('.sliderImage')
//     const photo = [
//         "a.jpg",
//         "b.jpg",
//         "c.jpg",
//         "d.jpg",
//         "e.jpg"  
//     ];

// let counter = 0;

// function previous(){
//     if(counter <= 0) counter = photo.length;
//     counter--;
//     return setAttribute();
// }

// function next(){
//     if(counter >= photo.length -1) counter  = - 1;
//     counter++;
//     return setAttribute();
// }

// function setAttribute(){
// return slider.setAttribute('src', 'image/' +  photo[counter])
// }



const SliderImages = document.querySelector('.SliderImage');

const image = [
    'a.jpg',
    'b.jpg',
    'c.jpg',
    'd.jpg',
    'e.jpg'
];

let count = 0;

function prev(){
 if(count <= 0) count = image.length;
 count--;
return setAttribute();
}

function next(){
if(count >= image.length -1) count = -1;
count++;
return setAttribute();

}

function setAttribute(){
    return SliderImages.setAttribute('src', 'image/' +  image[count])

}








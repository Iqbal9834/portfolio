import React from 'react';
import self from '../img/self.jpeg';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(185, 85, 211)", "rgb(247, 10, 7)",];
/*
I highly recommend using a gradient generator like https://paytonjewell.github.io/gradient-generator/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */



/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Iqbal",
    lastName: "ali",
    initials: "python/js", // the example uses first and last, but feel free to use three or more if you like.
    position: "Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self portrait in the "img" folder something else!
    gradient: `linear-gradient(135deg, ${colors})`, // don't change this either
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        ["⌨", "Love keyboard sound"],
        ["☕️", "Fueled by coffee"], // change the emojis to something related to your list item :)
        ["🇮🇳", "Based in the India"],
        ["💼", "Full stack developer at Mcsam"],
        ["✉️", "iqbalali9554@gmail.com"],
    ],
    socials: [
        ["https://www.facebook.com/profile.php?id=100011389776679", facebookIcon()], // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        ["https://www.instagram.com/_blank_life9/", instagramIcon()], // Just change the links so that they lead to your social profiles.
        ["https://www.linkedin.com/in/iqbal-ali-07979a190/", linkedInIcon()],
        ["https://stackoverflow.com/users/11106119/iqbal", stackOverflowIcon()],
        ["https://www.quora.com/profile/Iqbal-Ali-67", quoraIcon()]
    ],
    bio: "Hello! I'm Iqbal. I'm a Full stack developer for Mcsam. I studied IT at Ambedkar instituite of technology, Currently pursuing bca from IGNOU I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me! Eager to learn currently learning devops technology",
    hobbies: [
        ["📖", "reading"], // Same as above, change the emojis to match / relate to your hobbies or interests.
        ["🎭", "theater"], // You can also remove the emojis if you'd like, I just think they look cute :P
        ["🎥", "movies"],
        ["🌶", "spicy food"]
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Grocery application",
            liveLink: "https://github.com/Iqbal9834/Grocery-application", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            sourceLink: "https://github.com/Iqbal9834/Grocery-application", // this should be a link to the **repository** of the project, where the code is hosted. Github, Phabricator, etc.
        },
        {
            title: "Vocabulary site",
            liveLink: "http://iqbalali.herokuapp.com/",
            sourceLink: "https://github.com/Iqbal9834/vocab-backend",
        },
        {
            title: "SMM Donation(private repo)",
            liveLink: "https://uat.mcsam.in/eagle/snm/",
            sourceLink: "",
        },
    ]
}

// leave these alone unless you know how to work with FontAwesome and want to change to your liking :)

function facebookIcon() {
    return <i className="fa fa-facebook" aria-hidden="true"/>
};

function instagramIcon() {
    return <i className="fa fa-instagram" aria-hidden="true"/>
};

function linkedInIcon() {
    return <i className="fa fa-linkedin" aria-hidden="true"/>
};

function stackOverflowIcon(){
    return <i class="fa fa-stack-overflow" aria-hidden="true"/>
}
function quoraIcon(){
    return <i class="fa fa-quora" aria-hidden="true"/>
}

/*==========================
      HEART PARTICLES
===========================*/

class HeartParticle{

    constructor(){

        this.reset();

    }

    reset(){

        this.angle=Math.random()*Math.PI*2;

        this.radius=Math.random()*1.2;

        this.speed=0.002+Math.random()*0.003;

        this.size=1+Math.random()*2.5;

        this.hue=Math.random()*360;

    }

    update(){

        this.angle+=this.speed;

        if(this.angle>Math.PI*2){

            this.angle=0;

        }

        this.hue+=0.5;

        if(this.hue>360){

            this.hue=0;

        }

    }

    draw(){

        const p=heart(this.angle);

        const scale=20+Math.sin(Date.now()*0.001)*3;

        const x=canvas.width/2+p.x*scale;

        const y=canvas.height/2-p.y*scale;

        ctx.beginPath();

        ctx.fillStyle=`hsl(${this.hue},100%,65%)`;

        ctx.shadowBlur=25;

        ctx.shadowColor=`hsl(${this.hue},100%,60%)`;

        ctx.arc(

            x,

            y,

            this.size,

            0,

            Math.PI*2

        );

        ctx.fill();

    }

}

const heartParticles=[];

for(let i=0;i<1200;i++){

    heartParticles.push(

        new HeartParticle()

    );

}  
/*==================================
        NEON GLOW EFFECT
===================================*/

let beat = 0;

function neonHeart(){

    beat += 0.05;

    const pulse = 1 + Math.sin(beat) * 0.08;

    ctx.save();

    ctx.translate(canvas.width/2, canvas.height/2);

    ctx.scale(pulse, pulse);

    ctx.translate(-canvas.width/2, -canvas.height/2);

    for(let i=0;i<heartParticles.length;i++){

        const p = heartParticles[i];

        const pos = heart(p.angle);

        const scale = 18;

        const x = canvas.width/2 + pos.x*scale;

        const y = canvas.height/2 - pos.y*scale;

        ctx.beginPath();

        ctx.fillStyle = `hsla(${p.hue},100%,60%,0.95)`;

        ctx.shadowColor = `hsl(${p.hue},100%,60%)`;
        ctx.shadowBlur = 35;

        ctx.arc(
            x,
            y,
            p.size + 0.6,
            0,
            Math.PI*2
        );  
      trails.push(

    new Trail(

        x,

        y,

        `hsl(${p.hue},100%,60%)`

    )

);

        ctx.fill();

    }

    ctx.restore();

}
/*==================================
        HEART TRAIL
===================================*/

const trails = [];

class Trail {

    constructor(x, y, color) {

        this.x = x;
        this.y = y;

        this.life = 100;

        this.size = Math.random() * 3 + 1;

        this.color = color;

    }

    update() {

        this.life--;

        this.size *= 0.985;

    }

    draw() {

        ctx.beginPath();

        ctx.fillStyle = this.color.replace("hsl", "hsla").replace(")", `,${this.life/100})`);

        ctx.shadowBlur = 20;

        ctx.shadowColor = this.color;

        ctx.arc(

            this.x,

            this.y,

            this.size,

            0,

            Math.PI*2

        );

        ctx.fill();

    }

}  
for(let i=trails.length-1;i>=0;i--){

    trails[i].update();

    trails[i].draw();

    if(trails[i].life<=0){

        trails.splice(i,1);

    }

}  
/*============================*/

const sparkle=[];

for(let i=0;i<300;i++){

    sparkle.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        r:Math.random()*2,

        a:Math.random(),

        s:Math.random()*0.02

    });

}

function drawSparkle(){

    for(let s of sparkle){

        s.a+=s.s;

        const alpha=(Math.sin(s.a)+1)/2;

        ctx.beginPath();

        ctx.fillStyle=`rgba(255,255,255,${alpha})`;

        ctx.arc(

            s.x,

            s.y,

            s.r,

            0,

            Math.PI*2

        );

        ctx.fill();

    }

}

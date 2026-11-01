

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  // Mobile D-pad initialization removed: it requires external jQuery, which may be blocked on managed Chromebooks. Keyboard controls remain available.

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fdd3f49e-91e6-4d1c-9f72-4c5535500583","54a1b718-1345-4a2a-8f64-85ebcb766f69","03bf5b0b-88c5-4445-8004-b5f6d2b9d210","c25524d7-1b89-47c5-a1c2-a786991e33be","0ea00ecf-f63c-4278-bf20-396feecd0901","4ed43202-a554-45dc-b926-d45970db1a7d","8a0ef342-cc67-4943-826a-e291edd459ea","773c7c4a-3a9b-4743-a02d-5d45679d59a5","f743c201-d105-4c52-a851-757b759dd8f3","7f9b76e3-1034-4ec5-a1b4-24e65d1c3656","46425cc3-3842-41c6-b19b-209b182c0404","3d23745d-c5a3-4f06-aed6-e5db6a71e3d0","e1086a95-2a10-44a8-88ec-1412aba75536","3eb3d24b-6a52-49b4-9991-2c8f2908008f","d14cb7b5-be3e-4c26-836f-a369d290e6a4","02f2afb1-3a52-445f-9f2a-328f5654027c","6a6861ed-2cd7-4789-8d4b-4af3fefff051","491a6925-618e-47fc-a228-725ab37d564c","be5a5153-2df2-44d9-92b5-abc5103c9b57"],"propsByKey":{"fdd3f49e-91e6-4d1c-9f72-4c5535500583":{"name":"Ruin","sourceUrl":null,"frameSize":{"x":82,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"E_RaGWZt5fDrzVwK3DoD3odtOmkA0tP6","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":82},"rootRelativePath":"assets/fdd3f49e-91e6-4d1c-9f72-4c5535500583.png"},"54a1b718-1345-4a2a-8f64-85ebcb766f69":{"name":"Ruin.goal","sourceUrl":null,"frameSize":{"x":250,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"h5QPswF4lNsfuw3lS_0phDOqrcMC95Py","loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":82},"rootRelativePath":"assets/54a1b718-1345-4a2a-8f64-85ebcb766f69.png"},"03bf5b0b-88c5-4445-8004-b5f6d2b9d210":{"name":"Everburn.goal","sourceUrl":null,"frameSize":{"x":250,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"GJ_w7c5q1ho2TageVhaT6MaGELdAORd6","loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":82},"rootRelativePath":"assets/03bf5b0b-88c5-4445-8004-b5f6d2b9d210.png"},"c25524d7-1b89-47c5-a1c2-a786991e33be":{"name":"Glade.goal","sourceUrl":null,"frameSize":{"x":250,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"oq9eVgWIpf3eP4.v8HBKsBJI7MwULiBJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":82},"rootRelativePath":"assets/c25524d7-1b89-47c5-a1c2-a786991e33be.png"},"0ea00ecf-f63c-4278-bf20-396feecd0901":{"name":"Darklind.goal","sourceUrl":null,"frameSize":{"x":250,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"uKvOIfQlckVZt2UMsK69T1GNtsvPJB0u","loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":82},"rootRelativePath":"assets/0ea00ecf-f63c-4278-bf20-396feecd0901.png"},"4ed43202-a554-45dc-b926-d45970db1a7d":{"name":"Everburn","sourceUrl":null,"frameSize":{"x":82,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"FOzaa5f3g9alZ84PS5QzNmmsKZvF2QlW","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":82},"rootRelativePath":"assets/4ed43202-a554-45dc-b926-d45970db1a7d.png"},"8a0ef342-cc67-4943-826a-e291edd459ea":{"name":"Darklind","sourceUrl":null,"frameSize":{"x":82,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"RLXLWeslYx3zcaeJaBRhuq0aRhrhUR0b","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":82},"rootRelativePath":"assets/8a0ef342-cc67-4943-826a-e291edd459ea.png"},"773c7c4a-3a9b-4743-a02d-5d45679d59a5":{"name":"Glade","sourceUrl":null,"frameSize":{"x":82,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"aRn00Gk9qlfijGhnyxnB_c4.CNWy6nHH","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":82},"rootRelativePath":"assets/773c7c4a-3a9b-4743-a02d-5d45679d59a5.png"},"f743c201-d105-4c52-a851-757b759dd8f3":{"name":"tile_1","sourceUrl":null,"frameSize":{"x":96,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"zfAMFscWEnNFpLkgMRnqxIPAahV9R5vW","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":11},"rootRelativePath":"assets/f743c201-d105-4c52-a851-757b759dd8f3.png"},"7f9b76e3-1034-4ec5-a1b4-24e65d1c3656":{"name":"tile_1_rotatory","sourceUrl":null,"frameSize":{"x":96,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"KYyBA.RT7oxxE6BS2GJxbtNIm3Mpxkgq","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":11},"rootRelativePath":"assets/7f9b76e3-1034-4ec5-a1b4-24e65d1c3656.png"},"46425cc3-3842-41c6-b19b-209b182c0404":{"name":"tile_2","sourceUrl":null,"frameSize":{"x":96,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"Xjr4jy4.q8.Px4UjJI5oLrkmkUmGrMb7","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":11},"rootRelativePath":"assets/46425cc3-3842-41c6-b19b-209b182c0404.png"},"3d23745d-c5a3-4f06-aed6-e5db6a71e3d0":{"name":"Speed","sourceUrl":null,"frameSize":{"x":96,"y":13},"frameCount":2,"looping":true,"frameDelay":12,"version":"7JCJb.lro7eu8xZspKZQJ9b8O3vj_AGw","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":26},"rootRelativePath":"assets/3d23745d-c5a3-4f06-aed6-e5db6a71e3d0.png"},"e1086a95-2a10-44a8-88ec-1412aba75536":{"name":"tile_2_rotatory","sourceUrl":null,"frameSize":{"x":96,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"diWWumzGoKg0o4Tee9GfAQVlhZTpZMWa","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":11},"rootRelativePath":"assets/e1086a95-2a10-44a8-88ec-1412aba75536.png"},"3eb3d24b-6a52-49b4-9991-2c8f2908008f":{"name":"tile_3","sourceUrl":null,"frameSize":{"x":25,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"1.6S3eHVEBaeGzK7D_xt444754pBOU6e","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":70},"rootRelativePath":"assets/3eb3d24b-6a52-49b4-9991-2c8f2908008f.png"},"d14cb7b5-be3e-4c26-836f-a369d290e6a4":{"name":"stawp","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"iKcDXEDuP5bqQ.z3iPoZnfp8Ww_4H44o","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d14cb7b5-be3e-4c26-836f-a369d290e6a4.png"},"02f2afb1-3a52-445f-9f2a-328f5654027c":{"name":"tile_0","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"TG.IC.VdmsMThz5i5cp7HOOfJKLtJxk3","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/02f2afb1-3a52-445f-9f2a-328f5654027c.png"},"6a6861ed-2cd7-4789-8d4b-4af3fefff051":{"name":"goal","sourceUrl":null,"frameSize":{"x":50,"y":71},"frameCount":1,"looping":true,"frameDelay":12,"version":"yqrM9xc0ht93Mpe.7bB4ceqE3EBIt6ZS","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":71},"rootRelativePath":"assets/6a6861ed-2cd7-4789-8d4b-4af3fefff051.png"},"491a6925-618e-47fc-a228-725ab37d564c":{"name":"Buzzsaw","sourceUrl":null,"frameSize":{"x":50,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"N0CNgw34lAuWA9Y9Cm9RUhWzCaUo7Iu_","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":47},"rootRelativePath":"assets/491a6925-618e-47fc-a228-725ab37d564c.png"},"be5a5153-2df2-44d9-92b5-abc5103c9b57":{"name":"box","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"RC9ANMuGWxzJvcF2vfBfTegZUqcK8UA4","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/be5a5153-2df2-44d9-92b5-abc5103c9b57.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bouncy = createGroup();
var floors = createGroup();
var boost = createGroup();
var stops = createGroup();
var goals = createGroup();
var ouchies = createGroup();
var speeds = createGroup();
var boxes = createGroup();
var balls = createGroup();
var Rgoal = createSprite(camera.x, camera.y - 75/camera.zoom);
var grid_snapping = false;
Rgoal.setAnimation("Ruin.goal");
Rgoal.visible = 0;
var Rgoaltime = 0;
var Egoal = createSprite(camera.x, camera.y - 75/camera.zoom);
Egoal.setAnimation("Everburn.goal");
Egoal.visible = 0;
var Egoaltime = 0;
var Dgoal = createSprite(camera.x, camera.y - 75/camera.zoom);
Dgoal.setAnimation("Darklind.goal");
Dgoal.visible = 0;
var Dgoaltime = 0;
var Ggoal = createSprite(camera.x, camera.y - 75/camera.zoom);
Ggoal.setAnimation("Glade.goal");
Ggoal.visible = 0;
var Ggoaltime = 0;
function resolveBoxStacking(a, b) {
if (a.isTouching(b)) {
if (a.y < b.y) {
a.velocityY = 0;
a.y -= 1;
}
}
}
function getRotationOfObjectTouchingBall(n,group){
  for (var i = 0; i < group.length; i++) {
    if(n.isTouching(group[i])){
      return group[i].rotation;
    }
  
    
  }
  return 0;
}
function getScaleOfObjectTouchingBall(n,group){
  for (var i = 0; i < group.length; i++) {
    if(n.isTouching(group[i])){
      return group[i].scale;
    }
      
    
  }
  return 0;
}
function Balls(n, w) {
  if(start){
    n.bounceOff(bouncy);
    n.collide(floors);
    for (var i = 0; i < balls.length; i++) {
      var b = balls[i];

      if (n.isTouching(b) && n != b) {

        if (n.y < b.y) {
          n.y -= 2;
        } else {
          n.y += 2;
        }

        var transfer = b.velocityX/(n.mass/b.mass);

        n.velocityX += transfer;
        b.velocityX -= transfer;

        n.velocityY = -Math.abs(n.velocityY) * 0.2;
      }
    }
    if(!n.isTouching(floors)){
      n.velocityY +=0.1*(((4/3)*Math.PI*(n.height/2), 3)*n.mass);
    }
    if(n.isTouching(speeds)){
      var rotDegrees = getRotationOfObjectTouchingBall(n, speeds);
      var sca = getScaleOfObjectTouchingBall(n, speeds);


      var rotRadians = (((rotDegrees % 360) + 360) % 360) * (Math.PI / 180);


      n.velocityX += sca * Math.cos(rotRadians);
      n.velocityY += sca * Math.sin(rotRadians); 
    }
    n.rotationSpeed = n.velocityX + n.velocityY;
    if(n.isTouching(boost)){
      var rotDegrees = getRotationOfObjectTouchingBall(n, boost);
      var sca = getScaleOfObjectTouchingBall(n, boost);


      var rotRadians = (((rotDegrees % 360) + 360) % 360) * (Math.PI / 180);


      n.velocityX += 5*sca * Math.cos(rotRadians);
      n.velocityY += 5*sca * Math.sin(rotRadians); 
    }
    if(n.isTouching(stops)){
      n.velocityX = 0;
    }
    if(n.isTouching(ouchies)){
      if (RLAgent && RLAgent.onHazard) RLAgent.onHazard(n);
      n.x = w.x;
      n.y = w.y;
      n.velocityX = 0;
      n.velocityY = 0;
    }
    if (n.isTouching(goals) && n == Ruin){
    Rgoal.visible =1;
    Rgoal.x = camera.x;
    Rgoal.y = camera.y - 75/camera.zoom;
    Rgoaltime = 40;
    Rspawn.x = n.x;
    Rspawn.y = n.y;
  }else{
    if (Rgoal.visible == 1 && Rgoaltime > 0){
      Rgoaltime -= 1;
      Rgoal.x = camera.x;
      Rgoal.y = camera.y - 75/camera.zoom;
    }else{
      Rgoal.visible =0;
    }
  }
  if (n.isTouching(goals) && n == burn){
    Egoal.visible =1;
    Egoal.x = camera.x;
    Egoal.y = camera.y - 75/camera.zoom;
    Egoaltime = 40;
    Espawn.x = n.x;
    Espawn.y = n.y;
  }else{
    if (Egoal.visible == 1 && Egoaltime > 0){
      Egoaltime -= 1;
      Egoal.x = camera.x;
      Egoal.y = camera.y - 75/camera.zoom;
    }else{
      Egoal.visible =0;
    }
  }
  if (n.isTouching(goals) && n == dark){
    Dgoal.visible =1;
    Dgoal.x = camera.x;
    Dgoal.y = camera.y - 75/camera.zoom;
    Dgoaltime = 40;
    Dspawn.x = n.x;
    Dspawn.y = n.y;
  }else{
    if (Dgoal.visible == 1 && Dgoaltime > 0){
      Dgoaltime -= 1;
      Dgoal.x = camera.x;
      Dgoal.y = camera.y - 75/camera.zoom;
    }else{
      Dgoal.visible =0;
    }
  }
  if (n.isTouching(goals) && n == tree){
    Ggoal.visible =1;
    Ggoal.x = camera.x;
    Ggoal.y = camera.y - 75/camera.zoom;
    Ggoaltime = 40;
    Gspawn.x = n.x;
    Gspawn.y = n.y;
  }else{
    if (Ggoal.visible == 1 && Ggoaltime > 0){
      Ggoaltime -= 1;
      Ggoal.x = camera.x;
      Ggoal.y = camera.y - 75/camera.zoom;
    }else{
      Ggoal.visible =0;
    }
  }
  }else{
    n.velocityX = 0;
    n.velocityY = 0;
  }
  if (Math.abs(n.velocityX) > 25 || Math.abs(n.velocityY) > 25){
    n.velocityX *= 0.98;
    n.velocityY -= ((1.056*0.47*(Math.PI*(n.height/2),  2) *Math.abs(n.velocityY),  2)/(2*n.mass*((Math.PI*(n.height/2),  2))));
  }
  if (Math.abs(n.velocityX) < 0.01){
    n.velocityX = 0;
  }
}
function Boxen(n) {
var maxV = 8;
n.velocityX = Math.max(-maxV, Math.min(maxV, n.velocityX));
n.velocityY = Math.max(-maxV, Math.min(maxV, n.velocityY));

// Collisions
n.collide(floors);
n.collide(boxes);
for (var i = 0; i < boxes.length; i++) {
if (boxes[i] != n) {
resolveBoxStacking(n, boxes[i]);
}
}


for (var i = 0; i < balls.length; i++) {
var b = balls[i];

if (n.isTouching(b)) {

// Separate vertically first (prevents sinking)
if (n.y < b.y) {
n.y -= 2;
} else {
n.y += 2;
}

// Transfer horizontal momentum (basic impulse)
var transfer = b.velocityX * 0.3;

n.velocityX += transfer;
b.velocityX -= transfer;

// Add slight bounce effect
n.velocityY = -Math.abs(n.velocityY) * 0.2;
}
}
// --- BALL IMPACT RESPONSE ---
for (var i = 0; i < balls.length; i++) {
if (n.isTouching(balls[i])) {

var bx = balls[i].x;
var by = balls[i].y;

var dx = n.x - bx;
var dy = n.y - by;

var dist = Math.sqrt(dx*dx + dy*dy) + 0.001;

// normal vector
var nx = dx / dist;
var ny = dy / dist;

// relative velocity (box only approximation)
var impact = Math.abs(n.velocityX * nx + n.velocityY * ny);

// push box outward
n.velocityX += nx * impact * 0.8;
n.velocityY += ny * impact * 0.8;

// add spin (this is what creates tumbling)
n.rotationSpeed += n.velocityX * 0.2;
n.rotationSpeed *= 0.95;
if (Math.abs(n.velocityX) > 8) {
n.velocityX *= 0.9;
}
if (Math.abs(n.velocityY) > 8) {
n.velocityY *= 0.9;
}
}
}
if(start){

// Destroy on hazard
if (n.isTouching(ouchies)){
n.remove();
return;
}

// Gravity
if(!n.isTouching(floors)){
n.velocityY += 9 * n.mass;
}else{
  n.rotationSpeed *= 0;
  if (Math.abs(n.rotation) < 1){
    n.rotation = 0;
  }
}

// Speed tiles
if(n.isTouching(speeds)){
var rot = getRotationOfObjectTouchingBall(n, speeds) * Math.PI/180;
var sca = getScaleOfObjectTouchingBall(n, speeds);
n.velocityX += sca * Math.cos(rot);
n.velocityY += sca * Math.sin(rot);
}

// Boost tiles
if(n.isTouching(boost)){
var rot = getRotationOfObjectTouchingBall(n, boost) * Math.PI/180;
var sca = getScaleOfObjectTouchingBall(n, boost);
n.velocityX += 5 * sca * Math.cos(rot);
n.velocityY += 5 * sca * Math.sin(rot);
}

// Stops
if(n.isTouching(stops)){
n.velocityX = 0;
}

// Friction / damping
n.velocityX *= n.friction;
n.velocityY *= 0.99;

// Clamp tiny values (prevents jitter)
if(Math.abs(n.velocityX) < 0.01) n.velocityX = 0;
if(Math.abs(n.velocityY) < 0.01) n.velocityY = 0;

// Rotation response
n.rotationSpeed += (n.velocityX + n.velocityY) * 0.5;
n.rotationSpeed *= 0.92;
} else {
n.velocityX = 0;
n.velocityY = 0;
}
}
var start = false;
var Ruin = createSprite(50,200);
Ruin.setAnimation("Ruin");
Ruin.mass = 2.8;
Ruin.height = 25;
Ruin.width = 25;
Ruin.setCollider("circle", 0,0);
balls.add(Ruin);
var burn = createSprite(150,200);
burn.mass = 2.9;
burn.setAnimation("Everburn");
burn.height = 25;
burn.width = 25;
burn.setCollider("circle", 0,0);
balls.add(burn);
var dark = createSprite(250,200);
dark.mass = 2.7;
dark.setAnimation("Darklind");
dark.height = 25;
dark.width = 25;
dark.setCollider("circle", 0,0);
balls.add(dark);
var tree = createSprite(350,200);
tree.mass = 2.6;
tree.setAnimation("Glade");
tree.height = 25;
tree.width = 25;
tree.setCollider("circle", 0,0);
balls.add(tree);
var selection = 1;
var selectorTile = createSprite(200, 300);
var size = 1;
var target = Ruin;
Ruin.tileType = "ru";
burn.tileType = "eb";
dark.tileType = "da";
tree.tileType = "gl";

// add code to below function if more tiles have been added
function spawnFromCode(type, x, y, scale, rotation) {
x = Number(x);
y = Number(y);
scale = Number(scale);
rotation = Number(rotation);

if (type == "ru") {
Ruin.x = x;
Ruin.y = y;
Ruin.scale = scale;
Ruin.rotation = rotation;
}
else if (type == "eb") {
burn.x = x;
burn.y = y;
burn.scale = scale;
burn.rotation = rotation;
}
else if (type == "da") {
dark.x = x;
dark.y = y;
dark.scale = scale;
dark.rotation = rotation;
}
else if (type == "gl") {
tree.x = x;
tree.y = y;
tree.scale = scale;
tree.rotation = rotation;
}
else if (type == "bo") {
var s = createSprite(x, y);
s.setAnimation("tile_1");
s.scale = scale;
s.rotation = rotation;
s.tileType = "bo";
bouncy.add(s);
}
else if (type == "fl") {
var s = createSprite(x, y);
s.setAnimation("tile_2");
s.scale = scale;
s.rotation = rotation;
s.tileType = "fl";
floors.add(s);
}
else if (type == "gr") {
var s = createSprite(x, y);
s.setAnimation("tile_3");
s.scale = scale;
s.rotation = rotation;
s.tileType = "gr";
boost.add(s);
}
else if (type == "s1") {
var s = createSprite(x, y);
s.setAnimation("tile_1_rotatory");
s.scale = scale;
s.rotation = rotation;
s.tileType = "s1";
if (s.rotation > 0) {
s.rotationSpeed = 3;
} else {
s.rotationSpeed = -3;
}

bouncy.add(s);
}else if (type == "sp") {
var s = createSprite(x, y);
s.setAnimation("Speed");
s.scale = scale;
s.rotation = rotation;
s.tileType = "sp";
floors.add(s);
speeds.add(s);
}
else if (type == "s2") {
var s = createSprite(x, y);
s.setAnimation("tile_2_rotatory");
s.scale = scale;
s.rotation = rotation;
s.tileType = "s2";
if (s.rotation > 0) {
s.rotationSpeed = 3;
} else {
s.rotationSpeed = -3;
}
floors.add(s);
}
else if (type == "st") {
var s = createSprite(x, y);
s.setAnimation("stawp");
s.scale = scale;
s.rotation = rotation;
s.tileType = "st";
stops.add(s);
}else if (type == "go") {
var s = createSprite(x, y);
s.setAnimation("goal");
s.scale = scale;
s.rotation = rotation;
s.tileType = "go";
goals.add(s);
}else if (type == "bz") {
var s = createSprite(x, y);
s.setAnimation("Buzzsaw");
s.scale = scale;
s.rotation = rotation;
s.tileType = "bz";
if (s.rotation > 0) {
s.rotationSpeed = 55;
} else {
s.rotationSpeed = -55;
}
ouchies.add(s);
}

}

// Turn one sprite into a text chunk
function encodeSprite(s) {
var sx = Math.round(s.x);
var sy = Math.round(s.y);
var ss = Math.round(s.scale * 100) / 100;
var sr = Math.round(s.rotation);
return s.tileType + "," + sx + "," + sy + "," + ss + "," + sr;
}

// add code to below function if more tiles have been added
function buildSaveCode() {
var parts = [];

// Save main sprites first
parts.push(encodeSprite(Ruin));
parts.push(encodeSprite(burn));
parts.push(encodeSprite(dark));
parts.push(encodeSprite(tree));

// Save placed bouncy objects
for (var i = 0; i < bouncy.length; i++) {
if (bouncy[i].tileType) {
parts.push(encodeSprite(bouncy[i]));
}
}

// Save floors, but skip the four main sprites because they were already saved
for (var q = 0; q < floors.length; q++) {
if (
floors[q] != Ruin &&
floors[q] != burn &&
floors[q] != dark &&
floors[q] != tree &&
floors[q].tileType
) {
parts.push(encodeSprite(floors[q]));
}
}

// Save boosts
for (var w = 0; w < boost.length; w++) {
if (boost[w].tileType) {
parts.push(encodeSprite(boost[w]));
}
}

// Save stops
for (var e = 0; e < stops.length; e++) {
if (stops[e].tileType){
parts.push(encodeSprite(stops[e]));
}
}
for (var r = 0; r < goals.length; r++) {
if (goals[r].tileType) {
parts.push(encodeSprite(goals[r]));
}
}
for (var z = 0; z < ouchies.length; z++) {
if (ouchies[z].tileType) {
parts.push(encodeSprite(ouchies[z]));
}
}

return "v1;" + parts.join("|");
}

// Remove all placed tiles, but keep the four main sprites
function clearPlacedTiles() {
for (var i = bouncy.length - 1; i >= 0; i--) {
bouncy[i].remove();
}

for (var q = boost.length - 1; q >= 0; q--) {
boost[q].remove();
}

for (var w = stops.length - 1; w >= 0; w--) {
stops[w].remove();
}
for (var c = stops.length - 1; c >= 0; c--) {
  stops[c].remove();
}
for (var z = ouchies.length - 1; z >= 0; z--) {
  ouchies[z].remove();
}
for (var g = goals.length - 1; g >= 0; g--) {
  goals[g].remove();
}
for (var e = floors.length - 1; e >= 0; e--) {
  if (floors[e] != Ruin &&floors[e] != burn &&floors[e] != dark &&floors[e] != tree) {
    floors[e].remove();
  }
  }
}

// Load a save code
function loadSaveCode(code) {
if (!code || code === "") {
return;
}

var sections = code.split(";");
if (sections.length < 2) {
return;
}

var version = sections[0];
var data = sections[1];

if (version != "v1") {
return;
}

clearPlacedTiles();

var objects = data.split("|");

for (var i = 0; i < objects.length; i++) {
var entry = objects[i].split(",");
if (entry.length >= 5) {
spawnFromCode(entry[0], entry[1], entry[2], entry[3], entry[4]);
}
}
}
var Rspawn = createSprite(Ruin.x, Ruin.y);
Rspawn.visible = 0;
var Espawn = createSprite(burn.x, burn.y);
Espawn.visible = 0;
var Dspawn = createSprite(dark.x, dark.y);
Dspawn.visible = 0;
var Gspawn = createSprite(tree.x, tree.y);
Gspawn.visible = 0;
var playable = true;
// -----------------------------------------------------------------------------
// BALL GAME AI LAB v4.0 — Double DQN research build
// Independent/shared networks, per-character replay, Double DQN, Huber loss,
// Adam optimizer, global gradient clipping, explicit hazard events, evaluation,
// model import/export, and measurable training statistics.
// -----------------------------------------------------------------------------
var RLAgent = (function(){
  var names=['Ruin','Everburn','Darklind','Glade'];
  var ballsRef=[Ruin,burn,dark,tree], spawns=[Rspawn,Espawn,Dspawn,Gspawn];
  var enabled=false, agentBall=Ruin, home=[], latestObservation=null;
  var status='Ready', mode='train', architecture='independent';
  var ACTIONS=4, HIDDEN=64, OBJECTS_PER_TYPE=4;
  var categories=[['platform',floors],['bouncy',bouncy],['boost',boost],['stop',stops],['goal',goals],['hazard',ouchies],['speed',speeds],['box',boxes],['ball',balls]];
  var INPUTS=18+categories.length*OBJECTS_PER_TYPE*9;
  var GAMMA=0.985, LEARNING_RATE=0.00018, EPS_MIN=0.04, EPS_DECAY=0.9992;
  var epsilon={Ruin:1,Everburn:1,Darklind:1,Glade:1};
  var models={independent:{},shared:{}},targets={independent:{},shared:{}},optimizers={independent:{},shared:{}};
  var replayByBall={Ruin:[],Everburn:[],Darklind:[],Glade:[]},sharedReplay=[];
  var replayMax=2500,replayCursor={Ruin:0,Everburn:0,Darklind:0,Glade:0},sharedReplayCursor=0;
  var frameCount=0,learnCount={Ruin:0,Everburn:0,Darklind:0,Glade:0,shared:0};
  var actionTicks=0,action=1,previousState=null,episodeSteps=0,episodeReward=0,lastDistance=0,stagnant=0,lastX=0,lastY=0,lastGrounded=false,hazardPending=false;
  var stats={},evalStats={},evalTarget=20,evalRuns=0,evalWins=0,lastLoss=0,lossAverage=0;
  var lastSave=0,storageKey='ballGameDQN_v4',errorText='';
  for(var si=0;si<4;si++){stats[names[si]]={episodes:0,wins:0,best:0,recent:[]};evalStats[names[si]]={runs:0,wins:0,recent:[]};}

  function ballName(){return names[ballsRef.indexOf(agentBall)]||'Ruin';}
  function randWeight(n){return (Math.random()*2-1)*Math.sqrt(2/Math.max(1,n));}
  function makeModel(){
    var w1=new Float32Array(INPUTS*HIDDEN),b1=new Float32Array(HIDDEN),w2=new Float32Array(HIDDEN*ACTIONS),b2=new Float32Array(ACTIONS);
    for(var i=0;i<w1.length;i++)w1[i]=randWeight(INPUTS);
    for(var j=0;j<w2.length;j++)w2[j]=randWeight(HIDDEN);
    return {w1:w1,b1:b1,w2:w2,b2:b2};
  }
  function cloneModel(m){return {w1:new Float32Array(m.w1),b1:new Float32Array(m.b1),w2:new Float32Array(m.w2),b2:new Float32Array(m.b2)};}
  function makeOptimizer(m){return {mw1:new Float32Array(m.w1.length),vw1:new Float32Array(m.w1.length),mb1:new Float32Array(m.b1.length),vb1:new Float32Array(m.b1.length),mw2:new Float32Array(m.w2.length),vw2:new Float32Array(m.w2.length),mb2:new Float32Array(m.b2.length),vb2:new Float32Array(m.b2.length),step:0};}
  function initNetworks(){
    for(var i=0;i<4;i++){var n=names[i];models.independent[n]=makeModel();targets.independent[n]=cloneModel(models.independent[n]);optimizers.independent[n]=makeOptimizer(models.independent[n]);}
    models.shared.shared=makeModel();targets.shared.shared=cloneModel(models.shared.shared);optimizers.shared.shared=makeOptimizer(models.shared.shared);
  }
  function activeKey(){return architecture==='shared'?'shared':ballName();}
  function activeModel(){return models[architecture][activeKey()];}
  function activeTarget(){return targets[architecture][activeKey()];}
  function activeOptimizer(){return optimizers[architecture][activeKey()];}
  function activeReplay(){return architecture==='shared'?sharedReplay:replayByBall[ballName()];}
  function forward(m,input){
    var h=new Float32Array(HIDDEN),out=new Float32Array(ACTIONS);
    for(var j=0;j<HIDDEN;j++){var sum=m.b1[j];for(var i=0;i<INPUTS;i++)sum+=m.w1[i*HIDDEN+j]*input[i];h[j]=sum>0?sum:0;}
    for(var a=0;a<ACTIONS;a++){var v=m.b2[a];for(var k=0;k<HIDDEN;k++)v+=h[k]*m.w2[k*ACTIONS+a];out[a]=v;}
    return {q:out,h:h};
  }
  function predict(m,s){return forward(m,s).q;}
  function argmax(q){var best=0;for(var i=1;i<q.length;i++)if(q[i]>q[best])best=i;return best;}
  function copyActiveToTarget(){targets[architecture][activeKey()]=cloneModel(activeModel());}
  function copyAllTargets(){for(var i=0;i<4;i++){var n=names[i];targets.independent[n]=cloneModel(models.independent[n]);}targets.shared.shared=cloneModel(models.shared.shared);}
  function networkToJSON(m){return {w1:Array.prototype.slice.call(m.w1),b1:Array.prototype.slice.call(m.b1),w2:Array.prototype.slice.call(m.w2),b2:Array.prototype.slice.call(m.b2)};}
  function networkFromJSON(m){if(!m||!m.w1||m.w1.length!==INPUTS*HIDDEN||!m.b1||m.b1.length!==HIDDEN||!m.w2||m.w2.length!==HIDDEN*ACTIONS||!m.b2||m.b2.length!==ACTIONS)throw new Error('Model dimensions do not match this game version.');return {w1:new Float32Array(m.w1),b1:new Float32Array(m.b1),w2:new Float32Array(m.w2),b2:new Float32Array(m.b2)};}
  function safeSave(){
    try{
      var payload={version:4,inputs:INPUTS,hidden:HIDDEN,architecture:architecture,models:{independent:{},shared:{shared:networkToJSON(models.shared.shared)}},epsilon:epsilon,stats:stats,evalStats:evalStats,learnCount:learnCount};
      for(var i=0;i<4;i++){var n=names[i];payload.models.independent[n]=networkToJSON(models.independent[n]);}
      localStorage.setItem(storageKey,JSON.stringify(payload));lastSave=frameCount;errorText='';if(!enabled)status='Saved';
    }catch(e){errorText='Browser storage is unavailable or full. Use Export model to keep a backup. Training can continue until this tab closes.';}
  }
  function loadSaved(){
    initNetworks();
    try{
      var raw=localStorage.getItem(storageKey);if(!raw)return;
      var saved=JSON.parse(raw);
      if(saved&&saved.version===4&&saved.inputs===INPUTS&&saved.hidden===HIDDEN&&saved.models){
        for(var i=0;i<4;i++){var n=names[i];if(saved.models.independent&&saved.models.independent[n])models.independent[n]=networkFromJSON(saved.models.independent[n]);}
        if(saved.models.shared&&saved.models.shared.shared)models.shared.shared=networkFromJSON(saved.models.shared.shared);
        architecture=saved.architecture==='shared'?'shared':'independent';if(saved.epsilon)epsilon=saved.epsilon;if(saved.stats)stats=saved.stats;if(saved.evalStats)evalStats=saved.evalStats;if(saved.learnCount)learnCount=saved.learnCount;
        copyAllTargets();for(var j=0;j<4;j++){var nm=names[j];optimizers.independent[nm]=makeOptimizer(models.independent[nm]);}optimizers.shared.shared=makeOptimizer(models.shared.shared);status='Version 4 learning restored';
      }else if(saved&&saved.version===3&&saved.inputs===INPUTS&&saved.hidden===HIDDEN&&saved.model){
        // Safe migration: seed all four independent models and the shared model from v3 weights.
        var legacy=networkFromJSON(saved.model);for(var k=0;k<4;k++){var nn=names[k];models.independent[nn]=cloneModel(legacy);}models.shared.shared=cloneModel(legacy);
        if(saved.epsilon)epsilon=saved.epsilon;if(saved.stats)stats=saved.stats;copyAllTargets();for(var q=0;q<4;q++){var nnn=names[q];optimizers.independent[nnn]=makeOptimizer(models.independent[nnn]);}optimizers.shared.shared=makeOptimizer(models.shared.shared);status='Migrated v3 model into v4 networks';
      }
    }catch(e){errorText='Saved model could not be loaded: '+e.message+' — fresh networks initialized.';}
  }
  loadSaved();

  function nearestGoal(ball){var best=null,bd=Infinity;for(var i=0;i<goals.length;i++){var g=goals[i];if(!g)continue;var d=Math.hypot(g.x-ball.x,g.y-ball.y);if(d<bd){bd=d;best=g;}}return {goal:best,d:bd};}
  function isGrounded(ball){return !!(ball.isTouching(floors)||ball.isTouching(bouncy));}
  function observe(ball){
    var z=(camera&&camera.zoom!=null)?camera.zoom:1,cx=(camera&&camera.x!=null)?camera.x:200,cy=(camera&&camera.y!=null)?camera.y:200;
    var pSX=200+(ball.x-cx)*z,pSY=200+(ball.y-cy)*z;
    var view={width:400,height:400,zoom:z,camera:{x:cx,y:cy},player:{x:ball.x,y:ball.y,screenX:pSX,screenY:pSY,vx:ball.velocityX||0,vy:ball.velocityY||0,radius:Math.max(ball.width||0,ball.height||0)*(ball.scale||1)/2,rotation:ball.rotation||0,scale:ball.scale||1,grounded:isGrounded(ball)},objects:[],byType:{}};
    var seen=[];
    for(var gi=0;gi<categories.length;gi++){
      var type=categories[gi][0],group=categories[gi][1],arr=[];
      for(var oi=0;oi<group.length;oi++){
        var o=group[oi];if(!o||o===ball||seen.indexOf(o)>=0||o.visible===false)continue;seen.push(o);
        var sc=o.scale!=null?o.scale:1,w=Math.abs(o.width||0)*Math.abs(sc),h=Math.abs(o.height||0)*Math.abs(sc),rot=(o.rotation||0)*Math.PI/180;
        var ex=(Math.abs(w*Math.cos(rot))+Math.abs(h*Math.sin(rot)))*z/2,ey=(Math.abs(w*Math.sin(rot))+Math.abs(h*Math.cos(rot)))*z/2;
        var sx=200+(o.x-cx)*z,sy=200+(o.y-cy)*z;if(sx+ex<0||sx-ex>400||sy+ey<0||sy-ey>400)continue;
        var item={type:type,x:o.x,y:o.y,screenX:sx,screenY:sy,width:Math.abs(o.width||0),height:Math.abs(o.height||0),rotation:o.rotation||0,scale:sc,dx:o.x-ball.x,dy:o.y-ball.y,screenDx:sx-pSX,screenDy:sy-pSY,angle:Math.atan2(o.y-ball.y,o.x-ball.x),distance:Math.hypot(o.x-ball.x,o.y-ball.y),vx:o.velocityX||0,vy:o.velocityY||0};arr.push(item);view.objects.push(item);
      }
      arr.sort(function(a,b){return a.distance-b.distance;});view.byType[type]=arr;
    }
    view.objects.sort(function(a,b){return a.distance-b.distance;});return view;
  }
  function buildState(ball,view){
    var s=new Float32Array(INPUTS),ng=nearestGoal(ball),g=ng.goal,idx=0,p=view.player;
    function put(v){s[idx++]=isFinite(v)?Math.max(-1,Math.min(1,v)):0;}
    put(p.vx/5);put(p.vy/14);put(p.grounded?1:0);put(Math.sin(p.rotation*Math.PI/180));put(Math.cos(p.rotation*Math.PI/180));put(p.scale/2);
    put((p.screenX-200)/200);put((p.screenY-200)/200);put(g?(g.x-ball.x)/600:0);put(g?(g.y-ball.y)/600:0);put(g?ng.d/850:1);
    put(g?Math.sin(Math.atan2(g.y-ball.y,g.x-ball.x)):0);put(g?Math.cos(Math.atan2(g.y-ball.y,g.x-ball.x)):0);put(Math.min(1,view.zoom/3));
    var bi=ballsRef.indexOf(ball);for(var b=0;b<4;b++)put(b===bi?1:0);
    for(var c=0;c<categories.length;c++){var list=view.byType[categories[c][0]]||[];for(var k=0;k<OBJECTS_PER_TYPE;k++){var o=list[k];if(!o){for(var z=0;z<9;z++)put(0);continue;}put(1);put(o.screenDx/400);put(o.screenDy/400);put(o.width*o.scale*view.zoom/400);put(o.height*o.scale*view.zoom/400);put(Math.sin(o.rotation*Math.PI/180));put(Math.cos(o.rotation*Math.PI/180));put(o.vx/5);put(o.vy/12);}}
    return s;
  }
  function chooseAction(s,explore){if(explore&&Math.random()<epsilon[ballName()])return Math.floor(Math.random()*ACTIONS);return argmax(predict(activeModel(),s));}
  function addExperience(s,a,r,ns,done){
    var arr=activeReplay(),e={s:new Float32Array(s),a:a,r:r,ns:new Float32Array(ns),done:done};
    if(arr.length<replayMax)arr.push(e);else if(architecture==='shared'){sharedReplay[sharedReplayCursor]=e;sharedReplayCursor=(sharedReplayCursor+1)%replayMax;}else{var n=ballName();replayByBall[n][replayCursor[n]]=e;replayCursor[n]=(replayCursor[n]+1)%replayMax;}
  }
  function trainBatch(){
    var arr=activeReplay();if(arr.length<64)return;
    var model=activeModel(),targetNet=activeTarget(),opt=activeOptimizer(),batch=24;
    var gw1=new Float32Array(model.w1.length),gb1=new Float32Array(model.b1.length),gw2=new Float32Array(model.w2.length),gb2=new Float32Array(model.b2.length),lossSum=0;
    for(var n=0;n<batch;n++){
      var e=arr[Math.floor(Math.random()*arr.length)],f=forward(model,e.s),q=f.q,target=e.r;
      if(!e.done){var nextOnline=predict(model,e.ns),nextAction=argmax(nextOnline),nextTarget=predict(targetNet,e.ns);target+=GAMMA*nextTarget[nextAction];}
      var td=q[e.a]-target,abs=Math.abs(td),loss=abs<=1?0.5*td*td:abs-0.5;lossSum+=loss;
      // Huber derivative is clipped to [-1, 1]. Accumulate a minibatch gradient.
      var d=td>1?1:(td< -1?-1:td),gh=new Float32Array(HIDDEN);
      for(var h=0;h<HIDDEN;h++){var wIndex=h*ACTIONS+e.a;gh[h]=f.h[h]>0?model.w2[wIndex]*d:0;gw2[wIndex]+=d*f.h[h];}
      gb2[e.a]+=d;
      for(var h2=0;h2<HIDDEN;h2++){gb1[h2]+=gh[h2];if(gh[h2]!==0){var off=h2;for(var j=0;j<INPUTS;j++)gw1[j*HIDDEN+off]+=gh[h2]*e.s[j];}}
    }
    var inv=1/batch,norm2=0;for(var a=0;a<gw1.length;a++){gw1[a]*=inv;norm2+=gw1[a]*gw1[a];}for(var b=0;b<gb1.length;b++){gb1[b]*=inv;norm2+=gb1[b]*gb1[b];}for(var c=0;c<gw2.length;c++){gw2[c]*=inv;norm2+=gw2[c]*gw2[c];}for(var d2=0;d2<gb2.length;d2++){gb2[d2]*=inv;norm2+=gb2[d2]*gb2[d2];}
    var norm=Math.sqrt(norm2),clip=norm>5?5/norm:1;if(clip<1){for(var x=0;x<gw1.length;x++)gw1[x]*=clip;for(var y=0;y<gb1.length;y++)gb1[y]*=clip;for(var z2=0;z2<gw2.length;z2++)gw2[z2]*=clip;for(var w=0;w<gb2.length;w++)gb2[w]*=clip;}
    opt.step++;var t=opt.step,beta1=0.9,beta2=0.999,eps=1e-8;
    function adam(param,grad,m,v){for(var i=0;i<param.length;i++){m[i]=beta1*m[i]+(1-beta1)*grad[i];v[i]=beta2*v[i]+(1-beta2)*grad[i]*grad[i];var mh=m[i]/(1-Math.pow(beta1,t)),vh=v[i]/(1-Math.pow(beta2,t));param[i]-=LEARNING_RATE*mh/(Math.sqrt(vh)+eps);}}
    adam(model.w1,gw1,opt.mw1,opt.vw1);adam(model.b1,gb1,opt.mb1,opt.vb1);adam(model.w2,gw2,opt.mw2,opt.vw2);adam(model.b2,gb2,opt.mb2,opt.vb2);
    learnCount[activeKey()]++;lastLoss=lossSum/batch;lossAverage=lossAverage===0?lastLoss:lossAverage*0.97+lastLoss*0.03;
    if(learnCount[activeKey()]%200===0)copyActiveToTarget();
  }
  function recordTrainingEpisode(success,reason){var st=stats[ballName()];st.episodes++;if(success)st.wins++;st.best=Math.max(st.best,episodeReward);st.recent.push(success?1:0);if(st.recent.length>40)st.recent.shift();epsilon[ballName()]=Math.max(EPS_MIN,epsilon[ballName()]*EPS_DECAY);status=success?'Goal reached — next attempt':reason||'Episode ended';if(st.episodes%5===0)safeSave();}
  function recordEvaluation(success,reason){var st=evalStats[ballName()];st.runs++;if(success)st.wins++;st.recent.push(success?1:0);if(st.recent.length>20)st.recent.shift();evalRuns++;if(success)evalWins++;status=reason||'Evaluation attempt finished';}
  function resetEpisode(success,reason){
    var terminalState=buildState(agentBall,observe(agentBall));
    if(mode==='train'){if(previousState){addExperience(previousState,action,success?120:-18,terminalState,true);trainBatch();}recordTrainingEpisode(success,reason);}else{recordEvaluation(success,reason);}
    var ix=ballsRef.indexOf(agentBall),homePos=home[ix]||{x:spawns[ix].x,y:spawns[ix].y};agentBall.x=homePos.x;agentBall.y=homePos.y;agentBall.velocityX=0;agentBall.velocityY=0;agentBall.rotation=0;
    previousState=null;actionTicks=0;episodeSteps=0;episodeReward=0;stagnant=0;lastDistance=nearestGoal(agentBall).d;lastX=agentBall.x;lastY=agentBall.y;lastGrounded=isGrounded(agentBall);hazardPending=false;
    if(mode==='eval'&&evalRuns>=evalTarget){enabled=false;status='Evaluation complete: '+evalWins+'/'+evalRuns+' goals';}
  }
  function applyAction(a){if(a===0&&agentBall.velocityX>-3)agentBall.velocityX-=0.85*(agentBall.scale||1);if(a===2&&agentBall.velocityX<3)agentBall.velocityX+=0.85*(agentBall.scale||1);if(a===3&&isGrounded(agentBall))agentBall.velocityY-=12*(agentBall.scale||1);}
  function tick(){
    if(!enabled||!start||!playable)return;
    target=agentBall;var ng=nearestGoal(agentBall);if(!ng.goal){enabled=false;status='No goal found — add a goal to this level';return;}
    latestObservation=observe(agentBall);var current=buildState(agentBall,latestObservation),d=ng.d;
    if(hazardPending){resetEpisode(false,'Hazard collision (physics event)');return;}
    if(agentBall.isTouching(goals)){resetEpisode(true,'Goal reached');return;}
    if(previousState&&actionTicks<=0){
      // Potential-based distance shaping plus a small successful-landing signal.
      var reward=0.12*(lastDistance-GAMMA*d)-0.035;
      var groundedNow=latestObservation.player.grounded;if(!lastGrounded&&groundedNow)reward+=0.18;
      if(Math.abs(agentBall.x-lastX)+Math.abs(agentBall.y-lastY)<0.5)stagnant++;else stagnant=0;
      var hz=latestObservation.byType.hazard||[];if(hz.length&&hz[0].distance<Math.max(55,agentBall.width*2))reward-=0.18;
      episodeReward+=reward;if(mode==='train'){addExperience(previousState,action,reward,current,false);trainBatch();}previousState=null;
      if(stagnant>55){resetEpisode(false,'Stagnation reset');return;}
    }
    if(actionTicks<=0){action=chooseAction(current,mode==='train');previousState=current;actionTicks=6;lastDistance=d;lastX=agentBall.x;lastY=agentBall.y;lastGrounded=latestObservation.player.grounded;}
    applyAction(action);actionTicks--;episodeSteps++;
    if(episodeSteps>2200){resetEpisode(false,'Episode time limit');return;}
    if(frameCount%1800===0&&mode==='train')safeSave();frameCount++;
  }
  function startTraining(){if(!start){Rspawn.x=Ruin.x;Rspawn.y=Ruin.y;Espawn.x=burn.x;Espawn.y=burn.y;Dspawn.x=dark.x;Dspawn.y=dark.y;Gspawn.x=tree.x;Gspawn.y=tree.y;start=true;}home=spawns.map(function(p){return {x:p.x,y:p.y};});if(!nearestGoal(agentBall).goal){status='No goal found — add a goal to this level';return;}mode='train';enabled=true;target=agentBall;previousState=null;actionTicks=0;episodeSteps=0;episodeReward=0;lastDistance=nearestGoal(agentBall).d;lastX=agentBall.x;lastY=agentBall.y;lastGrounded=isGrounded(agentBall);hazardPending=false;status='Training · '+architecture+' network';}
  function startEvaluation(count){if(!start){Rspawn.x=Ruin.x;Rspawn.y=Ruin.y;Espawn.x=burn.x;Espawn.y=burn.y;Dspawn.x=dark.x;Dspawn.y=dark.y;Gspawn.x=tree.x;Gspawn.y=tree.y;start=true;}home=spawns.map(function(p){return {x:p.x,y:p.y};});if(!nearestGoal(agentBall).goal){status='No goal found — add a goal to this level';return;}mode='eval';evalTarget=Math.max(1,Math.min(100,count||20));evalRuns=0;evalWins=0;enabled=true;previousState=null;actionTicks=0;episodeSteps=0;episodeReward=0;lastDistance=nearestGoal(agentBall).d;lastX=agentBall.x;lastY=agentBall.y;lastGrounded=isGrounded(agentBall);hazardPending=false;status='Evaluating '+evalTarget+' episodes (no learning)';}
  function stop(){enabled=false;safeSave();status='Stopped';}
  function setBall(i){if(enabled)stop();agentBall=ballsRef[Math.max(0,Math.min(3,i))];target=agentBall;previousState=null;actionTicks=0;latestObservation=observe(agentBall);status='Selected '+ballName();}
  function setExploration(v){epsilon[ballName()]=Math.max(EPS_MIN,Math.min(1,v));safeSave();}
  function setArchitecture(v){if(enabled)stop();architecture=v==='shared'?'shared':'independent';previousState=null;actionTicks=0;status='Using '+architecture+' network';safeSave();}
  function resetLearning(){if(enabled)stop();initNetworks();copyAllTargets();optimizers={independent:{},shared:{}};for(var i=0;i<4;i++){var n=names[i];optimizers.independent[n]=makeOptimizer(models.independent[n]);}optimizers.shared.shared=makeOptimizer(models.shared.shared);replayByBall={Ruin:[],Everburn:[],Darklind:[],Glade:[]};sharedReplay=[];replayCursor={Ruin:0,Everburn:0,Darklind:0,Glade:0};sharedReplayCursor=0;learnCount={Ruin:0,Everburn:0,Darklind:0,Glade:0,shared:0};epsilon={Ruin:1,Everburn:1,Darklind:1,Glade:1};for(var j=0;j<4;j++){var nm=names[j];stats[nm]={episodes:0,wins:0,best:0,recent:[]};evalStats[nm]={runs:0,wins:0,recent:[]};}safeSave();status='Fresh v4 networks initialized';}
  function exportModel(){try{var payload={format:'BallGameDQN',version:4,inputs:INPUTS,hidden:HIDDEN,architecture:architecture,character:ballName(),model:networkToJSON(activeModel())};var blob=new Blob([JSON.stringify(payload)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='ball-game-v4-'+architecture+'-'+ballName().toLowerCase()+'.json';document.body.appendChild(a);a.click();document.body.removeChild(a);setTimeout(function(){URL.revokeObjectURL(url);},1000);status='Model exported';}catch(e){errorText='Export failed: '+e.message;}}
  function importModelText(raw){try{var payload=JSON.parse(raw);if(payload.format!=='BallGameDQN'||payload.version!==4||payload.inputs!==INPUTS||payload.hidden!==HIDDEN)throw new Error('This is not a compatible v4 model export.');var imported=networkFromJSON(payload.model);models[architecture][activeKey()]=imported;targets[architecture][activeKey()]=cloneModel(imported);optimizers[architecture][activeKey()]=makeOptimizer(imported);safeSave();status='Imported model for '+ballName();return true;}catch(e){errorText='Import failed: '+e.message;return false;}}
  function onHazard(ball){if(enabled&&ball===agentBall)hazardPending=true;}
  function info(){if(!latestObservation)latestObservation=observe(agentBall);var st=stats[ballName()],ev=evalStats[ballName()],recent=st.recent||[],sum=0,es=ev.recent||[],evsum=0;for(var i=0;i<recent.length;i++)sum+=recent[i];for(var j=0;j<es.length;j++)evsum+=es[j];return {enabled:enabled,status:status,mode:mode,architecture:architecture,ball:ballName(),episodes:st.episodes||0,wins:st.wins||0,rate:st.episodes?Math.round(100*st.wins/st.episodes):0,recentRate:recent.length?Math.round(100*sum/recent.length):0,evalRuns:ev.runs||0,evalWins:ev.wins||0,evalRate:ev.runs?Math.round(100*ev.wins/ev.runs):0,evalCurrent:evalRuns,evalTarget:evalTarget,epsilon:epsilon[ballName()],steps:episodeSteps,reward:Math.round(episodeReward*10)/10,learnCount:learnCount[activeKey()]||0,replay:activeReplay().length,visible:latestObservation.objects.length,loss:Math.round(lastLoss*10000)/10000,lossAverage:Math.round(lossAverage*10000)/10000,observation:latestObservation,error:errorText};}
  return {tick:tick,start:startTraining,evaluate:startEvaluation,stop:stop,setBall:setBall,setExploration:setExploration,setArchitecture:setArchitecture,reset:resetLearning,save:safeSave,exportModel:exportModel,importModelText:importModelText,onHazard:onHazard,info:info,observe:function(){latestObservation=observe(agentBall);return latestObservation;},isTraining:function(){return enabled;}};
})();

// Responsive v4 research dashboard; no external dependencies or Developer Tools required.
document.addEventListener('DOMContentLoaded',function(){
  try{
    var panel=document.createElement('section');panel.id='rl-dashboard';
    panel.innerHTML='<div class="rl-head"><div><b>BALL GAME AI LAB</b><small>V4.0 · DOUBLE DQN RESEARCH</small></div><span id="rl-status">READY</span></div><div class="rl-controls"><label>Character<select id="rl-ball"><option value="0">Ruin</option><option value="1">Everburn</option><option value="2">Darklind</option><option value="3">Glade</option></select></label><label>Network<select id="rl-architecture"><option value="independent">Independent</option><option value="shared">Shared</option></select></label></div><div class="rl-controls"><button id="rl-start">Train</button><button id="rl-evaluate">Evaluate 20</button><button id="rl-stop">Stop</button></div><div class="rl-grid"><div><small>Training episodes</small><strong id="rl-episodes">0</strong></div><div><small>Training goals</small><strong id="rl-wins">0</strong></div><div><small>Training success</small><strong id="rl-rate">0%</strong></div><div><small>Last 40 attempts</small><strong id="rl-recent">0%</strong></div><div><small>Evaluation</small><strong id="rl-eval">0 / 0</strong></div><div><small>Eval success</small><strong id="rl-evalrate">0%</strong></div><div><small>Replay samples</small><strong id="rl-replay">0</strong></div><div><small>Gradient updates</small><strong id="rl-learn">0</strong></div><div><small>Exploration</small><strong id="rl-epsilon">100%</strong></div><div><small>Last Huber loss</small><strong id="rl-loss">0</strong></div><div><small>Visible objects</small><strong id="rl-visible">0</strong></div><div><small>Episode reward</small><strong id="rl-reward">0</strong></div></div><label class="rl-range">Exploration <input id="rl-explore" type="range" min="0.04" max="1" step="0.01" value="1"></label><div class="rl-actions"><button id="rl-reset">Reset all learning</button><button id="rl-save">Save</button><button id="rl-export">Export model</button><button id="rl-import">Import model</button><input id="rl-file" type="file" accept="application/json,.json" hidden></div><details class="rl-senses"><summary>Inspect agent perception</summary><pre id="rl-observation">Waiting for level…</pre></details><div id="rl-message">Load a level with a goal, enter play mode, then train. Evaluation runs greedily with learning disabled.</div><div id="rl-error" hidden></div>';
    var style=document.createElement('style');style.textContent='html,body{min-width:0!important;width:100%!important;height:auto!important;min-height:100%!important;overflow:auto!important;position:relative!important}#sketch{position:relative!important;left:0!important;top:0!important;width:400px!important;height:400px!important;max-width:100vw}#rl-dashboard{position:fixed;left:420px;top:12px;width:min(390px,calc(100vw - 440px));max-height:calc(100vh - 24px);overflow:auto;box-sizing:border-box;background:#151b26;color:#edf2f8;font:13px Arial,sans-serif;padding:14px;border:1px solid #3b485c;border-radius:12px;z-index:999999;box-shadow:0 8px 28px #0004}#rl-dashboard *{box-sizing:border-box}#rl-dashboard .rl-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:8px}#rl-dashboard .rl-head b{font-size:15px;letter-spacing:.6px}#rl-dashboard .rl-head small{display:block;color:#91a0b5;font-size:9px;margin-top:3px;letter-spacing:1px}#rl-status{font-size:10px;color:#8de0aa;font-weight:bold}#rl-dashboard button,#rl-dashboard select{background:#2a3546;color:#f5f7fa;border:1px solid #52627a;border-radius:6px;padding:8px;cursor:pointer;font-size:12px}#rl-dashboard button:hover{background:#3b4a61}.rl-controls,.rl-actions{display:flex;gap:6px;align-items:end;margin:9px 0;flex-wrap:wrap}.rl-controls label{flex:1;min-width:110px}.rl-controls select{display:block;width:100%;margin-top:4px}.rl-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px;margin:12px 0}.rl-grid div{background:#202a38;border-radius:7px;padding:8px;min-width:0}.rl-grid small{display:block;color:#aebbd0;font-size:10px;min-height:22px}.rl-grid strong{font-size:17px;overflow-wrap:anywhere}.rl-range{display:block;margin:12px 0;color:#cbd5e1}.rl-range input{display:block;width:100%;margin-top:5px}.rl-senses{margin-top:10px;color:#cbd5e1}.rl-senses summary{cursor:pointer;padding:5px 0}.rl-senses pre{white-space:pre-wrap;word-break:break-word;max-height:220px;overflow:auto;background:#0b1018;padding:8px;border-radius:6px;font-size:9px;color:#b8d5f5}#rl-message{color:#afbdd0;line-height:1.45;font-size:11px;margin-top:10px}#rl-error{background:#40272b;color:#ffd5d5;padding:8px;border-radius:6px;margin-top:8px;white-space:pre-wrap;font-size:11px}@media(max-width:820px){#rl-dashboard{position:relative;left:auto;top:auto;width:min(400px,100vw);max-height:none;margin:12px 0 20px;border-radius:10px}#sketch{margin:0 auto}}';document.head.appendChild(style);document.body.appendChild(panel);
    document.getElementById('rl-architecture').value=RLAgent.info().architecture;
    document.getElementById('rl-start').onclick=function(){RLAgent.start();};document.getElementById('rl-evaluate').onclick=function(){RLAgent.evaluate(20);};document.getElementById('rl-stop').onclick=function(){RLAgent.stop();};document.getElementById('rl-ball').onchange=function(){RLAgent.setBall(Number(this.value));};document.getElementById('rl-architecture').onchange=function(){RLAgent.setArchitecture(this.value);};document.getElementById('rl-explore').oninput=function(){RLAgent.setExploration(Number(this.value));};document.getElementById('rl-reset').onclick=function(){if(confirm('Reset all independent and shared networks, statistics, and saved learning?'))RLAgent.reset();};document.getElementById('rl-save').onclick=function(){RLAgent.save();};document.getElementById('rl-export').onclick=function(){RLAgent.exportModel();};document.getElementById('rl-import').onclick=function(){document.getElementById('rl-file').click();};document.getElementById('rl-file').onchange=function(){var file=this.files&&this.files[0];if(!file)return;var reader=new FileReader();reader.onload=function(){RLAgent.importModelText(String(reader.result||''));};reader.onerror=function(){var el=document.getElementById('rl-error');el.hidden=false;el.textContent='Could not read selected model file.';};reader.readAsText(file);};
    window.setInterval(function(){try{var x=RLAgent.info();document.getElementById('rl-status').textContent=x.status;document.getElementById('rl-status').style.color=x.enabled?'#8de0aa':'#f3c66d';var pairs={episodes:x.episodes,wins:x.wins,rate:x.rate+'%',recent:x.recentRate+'%',eval:x.evalCurrent+' / '+x.evalTarget,evalrate:x.evalRate+'%',replay:x.replay,learn:x.learnCount,epsilon:Math.round(x.epsilon*100)+'%',loss:x.loss,visible:x.visible,reward:x.reward};Object.keys(pairs).forEach(function(k){var el=document.getElementById('rl-'+k);if(el)el.textContent=pairs[k];});var obs=document.getElementById('rl-observation');if(obs&&document.querySelector('.rl-senses[open]'))obs.textContent=JSON.stringify(x.observation,null,2);var err=document.getElementById('rl-error');if(x.error){err.hidden=false;err.textContent=x.error;}else{err.hidden=true;}}catch(e){var m=document.getElementById('rl-message');if(m)m.textContent='Dashboard update error: '+e.message;}},300);
  }catch(e){var fallback=document.createElement('pre');fallback.style.cssText='position:fixed;z-index:999999;top:5px;left:5px;background:#300;color:#fff;padding:10px;max-width:95vw;white-space:pre-wrap';fallback.textContent='AI dashboard startup error: '+(e.stack||e.message||e);document.body.appendChild(fallback);}
});
function draw() {
  
  Balls(Ruin, Rspawn);
  Balls(burn, Espawn);
  Balls(dark, Dspawn);
  Balls(tree, Gspawn);
  RLAgent.tick();
  background("white");
  
  if(start){
    if (keyWentDown("1")){
      target = Ruin;
    }
    if (keyWentDown("2")){
      target = burn;
    }
    if (keyWentDown("3")){
      target = dark;
    }
    if (keyWentDown("4")){
      target = tree;
    }
    for(var i = 0; i < boxes.length; i++) {
      Boxen(boxes[i]);
      
    }
    if (target == Ruin){
      camera.x = Ruin.x;
      camera.y = Ruin.y;
    }
    if (target == burn){
      camera.x = burn.x;
      camera.y = burn.y;
    }
    if (target == dark){
      camera.x = dark.x;
      camera.y = dark.y;
    }
    if (target == tree){
      camera.x = tree.x;
      camera.y = tree.y;
    }
    if(playable == true && !RLAgent.isTraining()){
      if(keyDown("w") && (target.isTouching(floors) || target.isTouching(bouncy))){
        target.velocityY -= 12*target.scale;
      }
      if(keyDown("a") && target.velocityX > -3){
        target.velocityX -= 1*target.scale;
      }
      if(keyDown("d") && target.velocityX < 3){
        target.velocityX += 1*target.scale;
      }
    }
    selectorTile.visible = 0;
  }else{
    if (keyWentDown("enter")){
      if(grid_snapping == true){
        grid_snapping = false;
      }else{
        grid_snapping = true;
      }
    }
    selectorTile.visible = 1;
    if (keyWentDown("p")) {
      var saveCode = buildSaveCode();
      prompt("Copy your level code:", saveCode);
      console.log(saveCode);
    }

    if (keyWentDown("l")) {
      var pastedCode = prompt("Paste your level code:");
      loadSaveCode(pastedCode);
    }
    if(keyDown("w")){
      camera.y -= 8;
    }
    if(keyDown("s")){
      camera.y += 8;
    }
    if(keyDown("a")){
      camera.x -= 8;
    }
    if(keyDown("d")){
      camera.x += 8;
    }
    if(grid_snapping == false){
    selectorTile.x = camera.x + (mouseX - 200) / camera.zoom;
    selectorTile.y = camera.y + (mouseY - 200) / camera.zoom;
    }else{
      selectorTile.x = (Math.round((camera.x + (mouseX - 200) / camera.zoom)/50))*50;
      selectorTile.y = (Math.round((camera.y + (mouseY - 200) / camera.zoom)/50))*50;
    }
   
    if (keyDown("left")){
      selectorTile.rotation -=1;
    }
    if (keyDown("right")){
      selectorTile.rotation +=1;
    }
    if (keyWentDown("1")){
      selection = 1;
    }
    if (keyWentDown("2")){
      selection = 2;
    }
    if (keyWentDown("3")){
      selection = 3;
    }
    if (keyWentDown("4")){
      selection = 4;
    }
    if (keyWentDown("5")){
      selection = 5;
    }
    if (keyWentDown("6")){
      selection = 6;
    }
    if (keyWentDown("7")){
      selection = 7;
    }
    if (keyWentDown("8")){
      selection = 8;
    }
    if (keyWentDown("9")){
      selection = 9;
    }
    if (keyWentDown("q")){
      selection = 10;
    }
    if (keyWentDown("0")){
      selection = 0;
    }
    if (keyWentDown("g")){
      selection = 11;
    }
    if (keyWentDown("e")){
      selection = 12;
    }
    if (keyWentDown("r")){
      selection = 13;
    }
    if (keyWentDown("t")){
      selection = 14;
    }
    if (keyWentDown("y")){
      selection = 15;
    }
    if (selection <= 3){
      selectorTile.setAnimation("tile_" + selection);
      selectorTile.scale = size;
      if (selection === 0){
        selectorTile.setAnimation("tile_" + selection);
        selectorTile.scale = size/2;
      }
    }
    if (selection == 4){
      selectorTile.setAnimation("Ruin");
      selectorTile.scale = 0.3*size;
    }
    if (selection == 5){
      selectorTile.setAnimation("Everburn");
      selectorTile.scale = size*0.3;
    }
    if (selection == 6){
      selectorTile.setAnimation("Darklind");
      selectorTile.scale = size*0.3;
    }
    if (selection == 7){
      selectorTile.setAnimation("Glade");
      selectorTile.scale = size*0.3;
    }
    if (selection == 8){
      selectorTile.setAnimation("tile_1_rotatory");
      selectorTile.scale = size;
    }
    if (selection == 9){
      selectorTile.setAnimation("tile_2_rotatory");
      selectorTile.scale = size;
    }
    if (selection == 10){
      selectorTile.setAnimation("stawp");
      selectorTile.scale = size*0.5;
    }
    if (selection == 11){
      selectorTile.setAnimation("goal");
      selectorTile.scale = size;
    }
    if (selection == 12){
      selectorTile.setAnimation("Buzzsaw");
      selectorTile.scale = size;
    }
    if (selection == 13){
      selectorTile.setAnimation("Speed");
      selectorTile.scale = size*0.92;
    }
    if (selection == 14){
      selectorTile.setAnimation("tile_2");
      selectorTile.scale = 0.6;
    }
    if (selection == 15){
      selectorTile.setAnimation("box");
      selectorTile.scale = size;
    }
    if(keyDown("up")){
      size +=0.1;
    }
    if(keyDown("down")){
      size -=0.1;
    }
    if(mouseWentDown("left")){
      if(selection == 1){
        var bouncyTile = createSprite(selectorTile.x, selectorTile.y);
        bouncyTile.setAnimation("tile_1");
        bouncyTile.rotation = selectorTile.rotation;
        bouncy.add(bouncyTile);
        bouncyTile.scale = size;
        bouncyTile.tileType = "bo";
      }
      if(selection == 2){
        var Tile = createSprite(selectorTile.x, selectorTile.y);
        Tile.setAnimation("tile_2");
        Tile.rotation = selectorTile.rotation;
        floors.add(Tile);
        Tile.scale = size;
        Tile.tileType = "fl";
      }
      if(selection == 3){
        var spike = createSprite(selectorTile.x, selectorTile.y);
        spike.setAnimation("tile_3");
        spike.rotation = selectorTile.rotation;
        boost.add(spike);
        spike.scale = size;
        spike.tileType = "gr";
      }
      if(selection == 4){
        Ruin.x = selectorTile.x;
        Ruin.y = selectorTile.y;
        Ruin.scale = size;
        
      }
      if(selection == 5){
        burn.x = selectorTile.x;
        burn.y = selectorTile.y;
        burn.scale = size;
      }
      if(selection == 6){
        dark.x = selectorTile.x;
        dark.y = selectorTile.y;
        dark.scale = size;
      }
      if(selection == 7){
        tree.x = selectorTile.x;
        tree.y = selectorTile.y;
        tree.scale = size;
      }
      if(selection == 8){
        var spinny = createSprite(selectorTile.x, selectorTile.y);
        spinny.setAnimation("tile_1_rotatory");
        spinny.rotation = selectorTile.rotation;
        bouncy.add(spinny);
        spinny.scale = size;
        spinny.tileType = "s1";
        if (spinny.rotation > 0){
        spinny.rotationSpeed = 3;
        }else{
          spinny.rotationSpeed = -3;
        }
      }
      if(selection == 9){
        var spinny2 = createSprite(selectorTile.x, selectorTile.y);
        spinny2.setAnimation("tile_2_rotatory");
        spinny2.rotation = selectorTile.rotation;
        floors.add(spinny2);
        spinny2.scale = size;
        spinny2.tileType = "s2";
        if (spinny2.rotation > 0){
        spinny2.rotationSpeed = 3;
        }else{
          spinny2.rotationSpeed = -3;
        }
      }
      if(selection == 10){
        var stop = createSprite(selectorTile.x, selectorTile.y);
        stop.setAnimation("stawp");
        stop.rotation = selectorTile.rotation;
        stops.add(stop);
        stop.scale = size/2;
        stop.tileType = "st";
      }
      if(selection == 11){
        var goal = createSprite(selectorTile.x, selectorTile.y);
        goal.setAnimation("goal");
        goal.rotation = selectorTile.rotation;
        goals.add(goal);
        goal.scale = size;
        goal.tileType = "go";
      }
      if(selection == 12){
        var Buzzsaw = createSprite(selectorTile.x, selectorTile.y);
        Buzzsaw.setAnimation("Buzzsaw");
        Buzzsaw.rotation = selectorTile.rotation;
        ouchies.add(Buzzsaw);
        Buzzsaw.scale = size;
        Buzzsaw.tileType = "bz";
        if (Buzzsaw.rotation > 0){
        Buzzsaw.rotationSpeed = 55;
        }else{
          Buzzsaw.rotationSpeed = -55;
        }
      }
      if(selection == 13){
        var speed = createSprite(selectorTile.x, selectorTile.y);
        speed.setAnimation("Speed");
        speed.rotation = selectorTile.rotation;
        speeds.add(speed);
        floors.add(speed);
        speed.scale = size*0.92;
        speed.tileType = "sp";
        
      }
      if(selection == 14){
        for (var i = 0; i < size*15; i++) {
          var freq = 1;
          var x = selectorTile.x + i * 60;
          var y = selectorTile.y + Math.sin(i * freq) * 20 + selectorTile.rotation * i;
          var tile = createSprite(x, y);
          tile.setAnimation("tile_2");
          var slope = Math.cos(i * freq) * 20 * freq + selectorTile.rotation;
          tile.rotation = Math.atan2(slope, 60) * (180 / Math.PI);
          tile.tileType = "fl";
          tile.scale = freq*0.7;
          floors.add(tile);
        }
        
        
      }
      if(selection == 15){
          var box = createSprite(selectorTile.x, selectorTile.y);
          box.setAnimation("box");
          box.rotation = selectorTile.rotation;
          box.tileType = "bx";
          box.scale = selectorTile.scale;
          box.mass = 1 + box.scale * 2;
          box.friction = 0.9;
          box.bounciness = 0.2;
          boxes.add(box);
          floors.add(box);
      }
      if(selection == 0){
        for(var i = bouncy.length - 1; i >= 0; i--){
          if(selectorTile.isTouching(bouncy[i])){
            bouncy[i].remove();
          }
        }
        for(var a = floors.length - 1; a >= 0; a--){
          if(selectorTile.isTouching(floors[a])){
            if(floors[a] != Ruin && floors[a] != burn && floors[a] != dark && floors[a] != tree){
              floors[a].remove();
            }
          }
        }
        for(var q = boost.length - 1; q >= 0; q--){
          if(selectorTile.isTouching(boost[q])){
            boost[q].remove();
          }
        }
        for(var s = stops.length - 1; s >= 0; s--){
          if(selectorTile.isTouching(stops[s])){
            stops[s].remove();
          }
        }
        for(var g = goals.length - 1; g >= 0; g--){
          if(selectorTile.isTouching(goals[g])){
            goals[g].remove();
          }
        }
        for(var z = ouchies.length - 1; z >= 0; z--){
          if(selectorTile.isTouching(ouchies[z])){
            ouchies[z].remove();
          }
        }
      }
      
    }
  
  }
  if (keyWentDown("space")){
    if(start){
      Ruin.x = Rspawn.x;
      Ruin.y=Rspawn.y;
      burn.x = Espawn.x;
      burn.y = Espawn.y;
      dark.x = Dspawn.x;
      dark.y = Dspawn.y;
      tree.x = Gspawn.x;
      tree.y = Gspawn.y;
      start = false;
    }else{
      Rspawn.x = Ruin.x;
      Rspawn.y = Ruin.y;
      Espawn.x = burn.x;
      Espawn.y = burn.y;
      Dspawn.x = dark.x;
      Dspawn.y = dark.y;
      Gspawn.x = tree.x;
      Gspawn.y = tree.y;
      start = true;
    }
  }
  if (keyDown("j")){
    camera.zoom = camera.zoom/1.01;
  }
  if(keyDown("k")){
    camera.zoom = camera.zoom*1.01;
  }
  drawSprites();
  textSize(15/camera.zoom);
  text("Rotation: " + selectorTile.rotation, camera.x - 200/camera.zoom, camera.y - 180/camera.zoom);
  text("Size: " + Math.round(size*10)/10, camera.x - 200/camera.zoom, camera.y - 160/camera.zoom);
  text("x: " + Math.round(camera.x), camera.x - 200/camera.zoom, camera.y - 140/camera.zoom);
  text("y: " + Math.round(camera.y), camera.x - 200/camera.zoom, camera.y - 120/camera.zoom);


}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

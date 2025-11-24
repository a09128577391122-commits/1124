let spriteSheet1, spriteSheet2, spriteSheet3, spriteSheet4;
let frameW1 = 227, frameH1 = 242, totalFrames1 = 8;
// 以毫秒為單位設定每幀持續時間（越小越快、越流暢）
let frameDuration1 = 80; // 約 12.5 FPS

let frameW2 = 215, frameH2 = 240, totalFrames2 = 7;
let frameDuration2 = 80; // 約 12.5 FPS

let frameW3 = 252, frameH3 = 211, totalFrames3 = 7;
let frameDuration3 = 80; // 約 12.5 FPS

let frameW4 = 155, frameH4 = 254, totalFrames4 = 4;
let frameDuration4 = 80; // 約 12.5 FPS

function preload() {
  // 請確認檔案位於 c:\Users\User\Downloads\1124\5\all 5.png、6\all 6.png、7\all 7.png 與 8\all 8.png
  spriteSheet1 = loadImage('5/all 5.png');
  spriteSheet2 = loadImage('6/all 6.png');
  spriteSheet3 = loadImage('7/all 7.png');
  spriteSheet4 = loadImage('8/all 8.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#ffe5ec');

  // 使用 millis() 計算基於時間的當前幀
  let currentFrame1 = floor((millis() / frameDuration1) % totalFrames1);
  let currentFrame2 = floor((millis() / frameDuration2) % totalFrames2);
  let currentFrame3 = floor((millis() / frameDuration3) % totalFrames3);
  let currentFrame4 = floor((millis() / frameDuration4) % totalFrames4);

  // 來源座標（假設每幀水平排列）
  let sx1 = currentFrame1 * frameW1, sy1 = 0;
  let sx2 = currentFrame2 * frameW2, sy2 = 0;
  let sx3 = currentFrame3 * frameW3, sy3 = 0;
  let sx4 = currentFrame4 * frameW4, sy4 = 0;

  // 計算顯示尺寸（高度約佔視窗高度的 35%，且不超過 2 倍原始尺寸）
  let scale1 = min(2, (height * 0.35) / frameH1);
  let scale2 = min(2, (height * 0.35) / frameH2);
  let scale3 = min(2, (height * 0.35) / frameH3);
  let scale4 = min(2, (height * 0.35) / frameH4);
  let displayW1 = frameW1 * scale1, displayH1 = frameH1 * scale1;
  let displayW2 = frameW2 * scale2, displayH2 = frameH2 * scale2;
  let displayW3 = frameW3 * scale3, displayH3 = frameH3 * scale3;
  let displayW4 = frameW4 * scale4, displayH4 = frameH4 * scale4;

  // 三圖間距
  let gap = 30;

  // 計算四圖的中心 x 座標，使整體置中
  let totalWidth = displayW1 + displayW2 + displayW3 + displayW4 + gap * 3;
  let pos1X = width / 2 - totalWidth / 2 + displayW1 / 2;
  let pos2X = pos1X + displayW1 + gap;
  let pos3X = pos2X + displayW2 + gap;
  let pos4X = pos3X + displayW3 + gap;

  let centerY = height / 2;

  // 繪出左側（資料夾5）
  image(spriteSheet1,
        pos1X, centerY,
        displayW1, displayH1,
        sx1, sy1, frameW1, frameH1);

  // 繪出中央偏左（資料夾6）
  image(spriteSheet2,
        pos2X, centerY,
        displayW2, displayH2,
        sx2, sy2, frameW2, frameH2);

  // 繪出中央偏右（資料夾7）
  image(spriteSheet3,
        pos3X, centerY,
        displayW3, displayH3,
        sx3, sy3, frameW3, frameH3);

  // 繪出右側（資料夾8）
  image(spriteSheet4,
        pos4X, centerY,
        displayW4, displayH4,
        sx4, sy4, frameW4, frameH4);
}
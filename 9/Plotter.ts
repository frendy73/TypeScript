/**
 * Типы и перечисления
 */

type Point = number;
type Distance = number;
type Angle = number;
type Position = { x: Point, y: Point };
enum CarriageState {
  UP,
  DOWN
}
enum LineColor {
  BLACK = "черный",
  RED = "красный",
  GREEN = "зеленый"
}
type PlotterState = {
  position: Position,
  angle: Angle,
  color: LineColor,
  carriageState: CarriageState
};

/**
 * Имитация функций плоттера
 */

function drawLine(from: Position, to: Position, color: LineColor): void {
  console.log(`...Чертим линию из (${from.x}, ${from.y}) в (${to.x}, ${to.y}) используя ${color} цвет.`);
}

function calcNewPosition(distance: Distance, angle: Angle, current: Position): Position {
  const angleInRads = angle * (Math.PI / 180.0);
  const x = current.x + distance * Math.cos(angleInRads);
  const y = current.y + distance * Math.sin(angleInRads);
  return { x: Math.round(x), y: Math.round(y) };
}

function move(distance: Distance, state: PlotterState): PlotterState {
  const newPosition = calcNewPosition(distance, state.angle, state.position);
  if (state.carriageState === CarriageState.DOWN) {
    drawLine(state.position, newPosition, state.color);
  } else {
    console.log(`Передвигаем на ${distance} от точки (${state.position.x}, ${state.position.y})`);
  }
  return { ...state, position: newPosition };
}

function turn(angle: Angle, state: PlotterState): PlotterState {
  console.log(`Поворачиваем на ${angle} градусов`);
  const newAngle = (state.angle + angle) % 360;
  return { ...state, angle: newAngle };
}

function carriageUp(state: PlotterState): PlotterState {
  console.log("Поднимаем каретку");
  return { ...state, carriageState: CarriageState.UP };
}

function carriageDown(state: PlotterState): PlotterState {
  console.log("Опускаем каретку");
  return { ...state, carriageState: CarriageState.DOWN };
}

function setColor(color: LineColor, state: PlotterState): PlotterState {
  console.log(`Устанавливаем ${color} цвет линии.`);
  return { ...state, color: color };
}

function setPosition(position: Position, state: PlotterState): PlotterState {
  console.log(`Устанавливаем позицию каретки в (${position.x}, ${position.y}).`);
  return { ...state, position: position };
}

/**
 * Функции для черчения фигур
 */

function drawTriangle(size: Distance, state: PlotterState): PlotterState {
  state = carriageDown(state);
  for (let i = 0; i < 3; i++) {
    state = move(size, state);
    state = turn(120, state);
  }
  return carriageUp(state);
}

function drawSquare(size: Distance, state: PlotterState): PlotterState {
  state = carriageDown(state);
  for (let i = 0; i < 4; i++) {
    state = move(size, state);
    state = turn(90, state);
  }
  return carriageUp(state);
}

/**
 * Инициализация и процесс черчения
 */

const initPosition: Position = { x: 0, y: 0 };
const initColor: LineColor = LineColor.BLACK;
const initAngle: Angle = 0;
const initCarriageState: CarriageState = CarriageState.UP;

let plotterState: PlotterState = {
  position: initPosition,
  angle: initAngle,
  color: initColor,
  carriageState: initCarriageState
};

// Процесс черчения
plotterState = drawTriangle(100, plotterState);
plotterState = setPosition({ x: 10, y: 10 }, plotterState);
plotterState = setColor(LineColor.RED, plotterState);
plotterState = drawSquare(80, plotterState);

namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f 8 8 f f 8 8 8 8 8 8 f f f f 
f f 8 8 f f 8 8 8 8 8 8 f f f f 
f f 8 8 8 8 8 8 8 8 1 1 8 8 f f 
f f 8 8 8 8 8 8 8 8 1 1 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 f f 8 8 8 8 8 8 f f f f 
f f 8 8 f f 8 8 8 8 8 8 f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
}
function setLevelCompletion () {
    if (sprites.allOfKind(SpriteKind.Food).length == 0) {
        pause(500)
        Level += 1
        setLevel()
    }
}
function setLevel () {
    if (Level == 1) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
        tiles.placeOnTile(Kitty, tiles.getTileLocation(6, 3))
    } else if (Level == 2) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000010000010000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
        tiles.placeOnTile(Kitty, tiles.getTileLocation(3, 5))
    } else if (Level == 3) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000010000000000000000000000000000000000000000000100000000000000000100000000000000000101000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
        tiles.placeOnTile(Kitty, tiles.getTileLocation(0, 6))
    } else if (Level == 4) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000100010000000000000000000000000000000000000000000000000001000001010000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
        tiles.placeOnTile(Kitty, tiles.getTileLocation(5, 1))
    } else if (Level == 5) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000010100000000000001000000000000000000000100000000000000000000000000000000000000000000000000000000000100010000000000000000000000000000000000`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
        tiles.placeOnTile(Kitty, tiles.getTileLocation(5, 3))
    } else if (Level == 6) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000100000100000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000100000000000100000000000000000000000000`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
        tiles.placeOnTile(Kitty, tiles.getTileLocation(0, 4))
    } else if (Level == 7) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000001000000010000010000000000000000000000000000000000000000000000000000010000000000010000000000000100000100000000000000000000000000`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
        tiles.placeOnTile(Kitty, tiles.getTileLocation(9, 1))
    } else if (Level == 8) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000001000000010000010000000000000000000000000000000000000000000000000000010000000000010000000000000100000100000000000000000000000000`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
    } else {
        game.splash("You win!")
        game.reset()
    }
    for (let value of tiles.getTilesByType(myTiles.tile1)) {
        Fish = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 8 8 . . 8 8 8 8 8 8 . . . . 
. . 8 8 . . 8 8 8 8 8 8 . . . . 
. . 8 8 8 8 8 8 8 8 1 1 8 8 . . 
. . 8 8 8 8 8 8 8 8 1 1 8 8 . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
. . 8 8 . . 8 8 8 8 8 8 . . . . 
. . 8 8 . . 8 8 8 8 8 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
        tiles.placeOnTile(Fish, value)
    }
    game.splash("Level " + Level)
}
function moveLeft () {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        if (Kitty.y == value.y && Kitty.x > value.x) {
            checkX = Kitty.x
            while (checkX < 160 && checkX != value.x) {
                checkX += -16
                if (checkX == value.x) {
                    music.playTone(262, music.beat(BeatFraction.Eighth))
                    Kitty.x = value.x
                    value.destroy()
                }
            }
        }
    }
}
function moveRight () {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        if (Kitty.y == value.y && Kitty.x < value.x) {
            checkX = Kitty.x
            while (checkX < 160 && checkX != value.x) {
                checkX += 16
                if (checkX == value.x) {
                    music.playTone(262, music.beat(BeatFraction.Eighth))
                    Kitty.x = value.x
                    value.destroy()
                }
            }
        }
    }
}
function moveUp () {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        if (Kitty.x == value.x && Kitty.y > value.y) {
            checkY = Kitty.y
            while (checkY > 0 && checkY != value.y) {
                checkY += -16
                if (checkY == value.y) {
                    music.playTone(262, music.beat(BeatFraction.Eighth))
                    Kitty.y = value.y
                    value.destroy()
                }
            }
        }
    }
}
function moveDown () {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        if (Kitty.x == value.x && Kitty.y < value.y) {
            checkY = Kitty.y
            while (checkY < 120 && checkY != value.y) {
                checkY += 16
                if (checkY == value.y) {
                    music.playTone(262, music.beat(BeatFraction.Eighth))
                    Kitty.y = value.y
                    value.destroy()
                }
            }
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    moveLeft()
    setLevelCompletion()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    moveDown()
    setLevelCompletion()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    setLevel()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    moveRight()
    setLevelCompletion()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveUp()
    setLevelCompletion()
})
let checkY = 0
let checkX = 0
let Fish: Sprite = null
let Level = 0
let Kitty: Sprite = null
color.setPalette(
color.GrayScale
)
game.splash("Hungry Kitty", "by Adrian")
Kitty = sprites.create(img`
8 8 . . . . 8 8 . . . . . . . . 
8 8 . . . . 8 8 . . . . . . . . 
8 8 8 8 8 8 8 8 . . . . 8 8 . . 
8 8 8 8 8 8 8 8 . . . . 8 8 . . 
1 1 8 8 1 1 8 8 . . . . . . 8 8 
1 1 8 8 1 1 8 8 . . . . . . 8 8 
8 8 8 8 8 8 8 8 . . . . . . 8 8 
8 8 8 8 8 8 8 8 . . . . . . 8 8 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . 8 8 . . 8 8 . . . . . . 8 8 
. . 8 8 . . 8 8 . . . . . . 8 8 
`, SpriteKind.Player)
Level = 1
setLevel()

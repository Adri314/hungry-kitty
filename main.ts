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
            hex`0a0008000100000000000001000000000000000000000000000000000000000000000101000000010000000001000000000000010000000000000000000000000000000000000000000000000000000000000000`,
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
        tiles.placeOnTile(Kitty, tiles.getTileLocation(1, 6))
    } else if (Level == 9) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000010000000101000000010000000000010000000000000000010000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000`,
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
        tiles.placeOnTile(Kitty, tiles.getTileLocation(6, 0))
    } else if (Level == 10) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000100000000000000000000000000000000000000000000000000000000000000000000000000000101010000000000000100000100000001000000000000000000000000000000000000000000`,
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
        tiles.placeOnTile(Kitty, tiles.getTileLocation(7, 0))
    } else if (Level == 11) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000010000000100000000000000000000000000000000000000000100000000010000000000000000000000000000010000000000000100000100000000000000000000000000000000000000`,
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
        tiles.placeOnTile(Kitty, tiles.getTileLocation(4, 5))
    } else if (Level == 12) {
        tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000100000000010000000000000000000000000000000000000000000100000100000000000100000100000000000100000000000000000000010000010000000000000000000000000000000000`,
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
        tiles.placeOnTile(Kitty, tiles.getTileLocation(3, 6))
    }
    for (let value of tiles.getTilesByType(myTiles.tile1)) {
        Fish = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 5 5 . . 5 5 5 5 5 5 . . . . 
. . 5 5 . . 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 f f 5 5 . . 
. . 5 5 5 5 5 5 5 5 f f 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 . . 5 5 5 5 5 5 . . . . 
. . 5 5 . . 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
        tiles.placeOnTile(Fish, value)
    }
}
function moveRight () {
    moved = 0
    checkX = Kitty.x
    checkY = Kitty.y
    while (checkX < 160 && moved == 0) {
        checkX += 16
        for (let value of sprites.allOfKind(SpriteKind.Food)) {
            if (Kitty.y == value.y && checkX == value.x) {
                music.playTone(262, music.beat(BeatFraction.Eighth))
                moved = 1
                Kitty.x = value.x
                value.destroy()
                setLevelCompletion()
            }
        }
    }
}
function moveUp () {
    moved = 0
    checkY = Kitty.y
    checkX = Kitty.x
    while (checkY > 0 && moved == 0) {
        checkY += -16
        for (let value of sprites.allOfKind(SpriteKind.Food)) {
            if (Kitty.x == value.x && checkY == value.y) {
                music.playTone(262, music.beat(BeatFraction.Eighth))
                moved = 1
                Kitty.y = value.y
                value.destroy()
                setLevelCompletion()
            }
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    moveLeft()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    moveDown()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    setLevel()
})
function moveDown () {
    moved = 0
    checkY = Kitty.y
    checkX = Kitty.x
    while (checkY < 120 && moved == 0) {
        checkY += 16
        for (let value of sprites.allOfKind(SpriteKind.Food)) {
            if (Kitty.x == value.x && checkY == value.y) {
                music.playTone(262, music.beat(BeatFraction.Eighth))
                moved = 1
                Kitty.y = value.y
                value.destroy()
                setLevelCompletion()
            }
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    moveRight()
})
function setLevelCompletion () {
    if (sprites.allOfKind(SpriteKind.Food).length == 0) {
        pause(300)
        music.playMelody("C - A - - - - - ", 480)
        Level += 1
        tiles.placeOnTile(Kitty, tiles.getTileLocation(5, 3))
        if (Level > 12) {
            game.splash("You win!")
            game.reset()
        } else {
            game.splash("Level " + Level + " of 12", "B to restart level")
            setLevel()
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveUp()
})
function moveLeft () {
    moved = 0
    checkY = Kitty.y
    checkX = Kitty.x
    while (checkX > 0 && moved == 0) {
        checkX += -16
        for (let value of sprites.allOfKind(SpriteKind.Food)) {
            if (Kitty.y == value.y && checkX == value.x) {
                music.playTone(262, music.beat(BeatFraction.Eighth))
                moved = 1
                Kitty.x = value.x
                value.destroy()
                setLevelCompletion()
            }
        }
    }
}
let checkY = 0
let checkX = 0
let moved = 0
let Fish: Sprite = null
let Level = 0
let Kitty: Sprite = null
color.setPalette(
color.GrayScale
)
game.setDialogCursor(img`
a a . . . . a a . . . . . . . . 
a a . . . . a a . . . . . . . . 
a a a a a a a a . . . . a a . . 
a a a a a a a a . . . . a a . . 
5 5 a a 5 5 a a . . . . . . a a 
5 5 a a 5 5 a a . . . . . . a a 
a a a a a a a a . . . . . . a a 
a a a a a a a a . . . . . . a a 
. . a a a a a a a a a a a a a a 
. . a a a a a a a a a a a a a a 
. . a a a a a a a a a a a a a a 
. . a a a a a a a a a a a a a a 
. . a a a a a a a a a a a a a a 
. . a a a a a a a a a a a a a a 
. . a a . . a a . . . . . . a a 
. . a a . . a a . . . . . . a a 
`)
game.splash("Hungry Kitty", "by Adrian")
Kitty = sprites.create(img`
a a . . . . a a . . . . . . . . 
a a . . . . a a . . . . . . . . 
a a a a a a a a . . . . a a . . 
a a a a a a a a . . . . a a . . 
5 5 a a 5 5 a a . . . . . . a a 
5 5 a a 5 5 a a . . . . . . a a 
a a a a a a a a . . . . . . a a 
a a a a a a a a . . . . . . a a 
. . a a a a a a a a a a a a a a 
. . a a a a a a a a a a a a a a 
. . a a a a a a a a a a a a a a 
. . a a a a a a a a a a a a a a 
. . a a a a a a a a a a a a a a 
. . a a a a a a a a a a a a a a 
. . a a . . a a . . . . . . a a 
. . a a . . a a . . . . . . a a 
`, SpriteKind.Player)
Level = 1
setLevel()

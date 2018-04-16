<template>
    <div id="content">

    </div>
</template>

<script>
    export default {
        mounted(){
            var app = new PIXI.Application();
            document.getElementById("content").appendChild(app.view);


            
            app.stop();
            // load spine data
            PIXI.loader
                .add('dragon', 'static/man/NewProject.json')
                .load(onAssetsLoaded);

            var dragon = null;
            function onAssetsLoaded(loader,res){
                // instantiate the spine animation
                console.log(res.dragon.spineData)
                dragon = new PIXI.spine.Spine(res.dragon.spineData);
               
                // dragon.skeleton.setToSetupPose();
                // dragon.update(0);
                // dragon.autoUpdate = false;


                


                 dragon
                    .on('pointerdown', onDragStart)
                    .on('pointerup', onDragEnd)
                    .on('pointerupoutside', onDragEnd)
                    .on('pointermove', onDragMove);


                console.log(dragon.transform)



                // create a container for the spine animation and add the animation to it
                // var dragonCage = new PIXI.Container();
                // dragonCage.addChild(dragon);

                // measure the spine animation and position it inside its container to align it to the origin
                var localRect = dragon.getLocalBounds();
                console.log(localRect)
                dragon.position.set(-localRect.x, -localRect.y);

                // now we can scale, position and rotate the container as any other display object
                // var scale = Math.min(
                //     (app.screen.width * 0.7) / dragonCage.width,
                //     (app.screen.height * 0.7) / dragonCage.height
                // );
                // dragonCage.scale.set(scale, scale);
                // dragonCage.position.set(
                //     (app.screen.width - dragonCage.width) * 0.5,
                //     (app.screen.height - dragonCage.height) * 0.5
                // );

                // add the container to the stage
                // app.stage.addChild(dragonCage);
                app.stage.addChild(dragon);

                app.start();
            }




            function onDragStart(event) {
                // store a reference to the data
                // the reason for this is because of multitouch
                // we want to track the movement of this particular touch
                this.data = event.data;
                this.alpha = 0.5;
                this.dragging = true;
                console.log(this.dragging)
            }

            function onDragEnd() {
                this.alpha = 1;
                this.dragging = false;
                // set the interaction data to null
                this.data = null;
                console.log(this.dragging)        
            }

            function onDragMove() {
                console.log(this.dragging)
                if (this.dragging) {
                    var newPosition = this.data.getLocalPosition(this.parent);
                    // this.x = newPosition.x;
                    // this.y = newPosition.y;
                //    this.position.set(newPosition.x, newPosition.y)
                }
            }











             app.ticker.add(function() {
                // update the spine animation, only needed if dragon.autoupdate is set to false
                dragon.update(0.01666666666667); // HARDCODED FRAMERATE!
            });













            // app.stop();
            // // load spine data
            // PIXI.loader
            //     .add('dragon', 'static/dragon/Dragon.json')
            //     .load(onAssetsLoaded);

            // var dragon = null;
            // function onAssetsLoaded(loader,res)
            // {
            //     // instantiate the spine animation
            //     dragon = new PIXI.spine.Spine(res.dragon.spineData);
            //     dragon.skeleton.setToSetupPose();
            //     dragon.update(0);
            //     dragon.autoUpdate = false;

            //     // create a container for the spine animation and add the animation to it
            //     var dragonCage = new PIXI.Container();
            //     dragonCage.addChild(dragon);

            //     // measure the spine animation and position it inside its container to align it to the origin
            //     var localRect = dragon.getLocalBounds();
            //     dragon.position.set(-localRect.x, -localRect.y);

            //     // now we can scale, position and rotate the container as any other display object
            //     var scale = Math.min(
            //         (app.screen.width * 0.7) / dragonCage.width,
            //         (app.screen.height * 0.7) / dragonCage.height
            //     );
            //     dragonCage.scale.set(scale, scale);
            //     dragonCage.position.set(
            //         (app.screen.width - dragonCage.width) * 0.5,
            //         (app.screen.height - dragonCage.height) * 0.5
            //     );

            //     // add the container to the stage
            //     app.stage.addChild(dragonCage);

            //     // once position and scaled, set the animation to play


            //      let left = keyboard(37),
            //          up = keyboard(38),
            //          down = keyboard(40);



            //            left.press = () => {
            //             //Change the cat's velocity when the key is pressed
            //                 dragon.state.setAnimation(0, 'walk', true);
            //             };
                        
            //             //Left arrow key `release` method
            //             left.release = () => {
            //                 //If the left arrow has been released, and the right arrow isn't down,
            //                 //and the cat isn't moving vertically:
            //                 //Stop the cat
            //                 dragon.state.setAnimation(0, 'stand', true);
            //             };


            //              up.press = () => {

            //                dragon.state.setAnimation(0, 'jump', true);

            //             };
            //             up.release = () => {
            //                 if (!down.isDown) {
            //                      dragon.state.setAnimation(0, 'stand', true);
            //                 }
            //             };


            //             down.press = () => {
            //                 dragon.state.setAnimation(0, 'fall', true);
            //             };
            //             down.release = () => {
            //                 if (!up.isDown) {
            //                      dragon.state.setAnimation(0, 'stand', true);
            //                 }
            //             };





            //     dragon.state.setAnimation(0, 'stand', true);

            //     app.start();
            // }




            // function keyboard(keyCode) {
            //     var key = {};
            //     key.code = keyCode;
            //     key.isDown = false;
            //     key.isUp = true;
            //     key.press = undefined;
            //     key.release = undefined;
            //     //The `downHandler`
            //     key.downHandler = event => {
            //         if (event.keyCode === key.code) {
            //         if (key.isUp && key.press) key.press();
            //         key.isDown = true;
            //         key.isUp = false;
            //         }
            //         event.preventDefault();
            //     };
            //     //The `upHandler`
            //     key.upHandler = event => {
            //         if (event.keyCode === key.code) {
            //         if (key.isDown && key.release) key.release();
            //         key.isDown = false;
            //         key.isUp = true;
            //         }
            //         event.preventDefault();
            //     };
            //     //Attach event listeners
            //     window.addEventListener(
            //         "keydown", key.downHandler.bind(key), false
            //     );
            //     window.addEventListener(
            //         "keyup", key.upHandler.bind(key), false
            //     );
            //     return key;
            // }



            // app.ticker.add(function() {
            //     // update the spine animation, only needed if dragon.autoupdate is set to false
            //     dragon.update(0.01666666666667); // HARDCODED FRAMERATE!
            // });


        }
    }
</script>

<style scoped>

</style>

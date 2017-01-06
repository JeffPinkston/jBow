This project shows how to make a two-handed bow and arrow in webVR.

![Alt text](captures/360_a.jpg?raw=true "Early Tests")

You can pick it up using either hand.  Then, take aim and pull the trigger on your back hand.  Releasing the trigger shoots an arrow.  The force with which the arrow travels depends on the distance between your back hand and the bow.

I made modifications to the ```grab``` component to communicate with the bow about which hand was used to grab it.  

Since I reuse arrows from a pool to improve performance, I also made slight modifications to the physics system in ```a-frame-physics-system``` so that it would emit a 'body-played' when the dynamic body is synced.

My ```rotate-toward-velocity``` component keeps the arrow pointed in the direction of travel.

# todo:

bugs:

0.1
- [x] reduce lag at shot (try a pool, try more specific selectors)
- [x] when arrows collide, return arrows to pool
- [x] arrow rotation at shot should be front of bow
- [x] why does arrow flip end over end?  because impulse position is middle? -- had to set fixedRotation since i'm doing it myself
- [x] realistic trajectory -- rotate toward velocity. probably its own component. 
- [x] add some targets
- [x] sound for nocking arrow
- [x] sound for shooting arrow
- [x] haptic pulse for shooting arrow (doesnt seem to be supported anywhere yet)

0.2
- [x] add a cooldown otherwise we run through the whole pool of arrows.
- [x] arrows that disappear from sight never collide -- it wasn't that they disappearede
- [] once you're reusing an arrow from the pool, it gets double the force every time.  probably because we're reusing the physics body and it isnt fresh. :/
- [] after pickup the rotation of the bow should be controlled by the line between the hands, not the controller rotation at all .followed by a short slerp back to real controller rotation after firing.  ala the lab
- [] string animations - meshline to back of arrow or to hand?
- [] pull arrow back in bow to match force
- [] arrow is not hitting 'static-body' target obj.  does hit primitive box, so its not a lack of CCD (continuous collision detection)


0.3
- [] animate targets
- [] how to better see the arrow during flight -- glow, particle trail?
- [] make arrow stick and then add cooldown delay before disappearing them
- [] haptic pulse on bow grab 
- [] increase poolsize for sounds to allow them to overlap
- [] visual indicator of target hit


0.4
- [] fire arrows
- [] enemy ai
- [] tower
- [] balloon spawner
- [] multiplayer (syncing physics...??? hmm)
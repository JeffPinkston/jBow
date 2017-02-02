/* global AFRAME */
AFRAME.registerComponent('microphone', {
        schema: {
        cordColor: {
            type: 'color',
            default: '#E20049'
        },
        init: function() {
            console.log('Init Microphone');
            this.microphoneHand = null;

            var entity = document.createElement('a-entity');
            entity.id = "microphone";
            entity.setAttribute('obj-model', 'obj: #mic-obj; mtl: #mic-mtl');
            entity.setAttribute('scale', '0.1 0.1 0.1');
            this.el.appendChild(entity);

            this.setMicrophoneHand = this.setMicrophoneHand.bind(this);
        },
        update: function() {
            //called immediately after init
            //update properties here if needed
        },
        play: function(){
            console.log('Play Microphone');
            var el = this.el;
            el.addEventListener('setMicrophoneHand', this.setMicrophoneHand);
            el.addEventListener('freeHands', this.freeHands);
        },
        pause: function() {
            var el = this.el;
            el.removeEventListener('setMicrophoneHand', this.setMicrophoneHand);
            el.removeEventListener('freeHands', this.freeHands);
        },
        setMicrophoneHand: function() {
            this.microphoneHand = evt.detail.hand;
            this.microphoneHandElement = document.getElementById(evt.detail.hand + 'Hand');
            if(this.primaryHand === 'left'){
                this.secondaryHandElement = document.getElementById('rightHand');
            }
            if(this.primaryHand === 'right'){
                this.secondaryHandElement = document.getElementById('leftHand');
            }
        }
    }
});
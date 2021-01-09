
        var typed = new Typed('.typingEffect', {
            /**
             * @property {array} strings strings to be typed
             * @property {string} stringsElement ID of element containing string children
             */
            strings: [
              'Web Developer',
              'UI/UX Designer',
              
            ],
            stringsElement: null,
        
            /**
             * @property {number} typeSpeed type speed in milliseconds
             */
            typeSpeed: 50,
        
            /**
             * @property {number} startDelay time before typing starts in milliseconds
             */
            startDelay: 0,
        
            /**
             * @property {number} backSpeed backspacing speed in milliseconds
             */
            backSpeed: 50,
        
            /**
             * @property {boolean} smartBackspace only backspace what doesn't match the previous string
             */
            smartBackspace: true,
        
            /**
             * @property {boolean} shuffle shuffle the strings
             */
            shuffle: false,
        
            /**
             * @property {number} backDelay time before backspacing in milliseconds
             */
            backDelay: 700,
        
            /**
             * @property {boolean} fadeOut Fade out instead of backspace
             * @property {string} fadeOutClass css class for fade animation
             * @property {boolean} fadeOutDelay Fade out delay in milliseconds
             */
            fadeOut: false,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500,
        
            /**
             * @property {boolean} loop loop strings
             * @property {number} loopCount amount of loops
             */
            loop: true,
            loopCount: Infinity,
        
            /**
             * @property {boolean} showCursor show cursor
             * @property {string} cursorChar character for cursor
             * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
             */
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true,
        
            /**
             * @property {string} attr attribute for typing
             * Ex: input placeholder, value, or just HTML text
             */
            attr: null,
        
            /**
             * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
             */
            bindInputFocusEvents: false,
        
            /**
             * @property {string} contentType 'html' or 'null' for plaintext
             */
            contentType: 'html'
        });
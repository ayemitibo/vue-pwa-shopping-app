/* eslint-disable no-tabs */
/* eslint-disable no-undef */
const notifications = {
  data() {
    return {
      // Izitoast
      notificationSystem: {
        options: {
          ballon: {
            balloon: true,
            position: "bottomCenter"
          },
          info: {
            position: "topRight"
          },
          success: {
            position: "topRight",
            close: true,
            closeOnEscape: false,
            timeout: 3000,
            displayMode: 2
          },
          warning: {
            position: "topRight"
          },
          error: {
            position: "topRight",
            displayMode: 2
          },
          question: {
            timeout: 20000,
            close: false,
            overlay: true,
            toastOnce: true,
            id: "question",
            zindex: 999,
            position: "center",
            buttons: [
              [
                "<button><b>YES</b></button>",
                function(instance, toast) {
                  instance.hide({ transitionOut: "fadeOut" }, toast, "button");
                },
                true
              ],
              [
                "<button>NO</button>",
                function(instance, toast) {
                  instance.hide({ transitionOut: "fadeOut" }, toast, "button");
                }
              ]
            ],
            onClosing: function(instance, toast, closedBy) {
              // eslint-disable-next-line no-console
              console.info("Closing | closedBy: " + closedBy);
            },
            onClosed: function(instance, toast, closedBy) {
              // eslint-disable-next-line no-console
              console.info("Closed | closedBy: " + closedBy);
            }
          }
        }
      }
    };
  },
  methods: {
    showDefaultNotification(
      title,
      icon,
      toastColor,
      path,
      customTheme,
      position,
      timeout
    ) {
      let that = this;
      this.$toast.show(" ", title, {
        theme: customTheme || "dark",
        icon: icon,
        timeout: timeout || false,
        iconColor: toastColor,
        close: false,
        overlay: false,
        transitionIn: "bounceInRight",
        layout: 1,
        iconUrl: "/favicon.png",
        displayMode: 2,
        backgroundColor: "#36622b",
        position: position || "bottomRight", // bottomLeft, topRight, topLeft, topCenter, bottomCenter
        // progressBarColor: '#FF2E2E',
        progressBarColor: "#213a1b",
        buttons: [
          [
            "<button>Ok</button>",
            function(instance, toast) {
              instance.hide(
                {
                  transitionOut: "fadeOutUp"
                },
                toast,
                "buttonName"
              );
              that.$router.push(path);
            },
            true
          ] // true to focus
        ]
        // onOpening: function(instance, toast) {},
        // onClosing: function(instance, toast, closedBy) {
        //   console.info("closedBy: " + closedBy); // tells if it was closed by 'drag' or 'button'
        // }
      });
    },
    showDefaultNotificationWithModalAction(title, path, iconUrl, buttonText) {
      // let that = this;
      this.$toast.show(" ", title, {
        theme: "dark",
        // icon: icon,
        timeout: false,
        iconColor: "#495463",
        close: false,
        overlay: false,
        transitionIn: "bounceInRight",
        layout: 1,
        iconUrl: iconUrl || "/favicon.png",
        displayMode: 2,
        backgroundColor: "#495463",
        // backgroundColor: '#275e0f',
        position: "bottomCenter", // bottomLeft, topRight, topLeft, topCenter, bottomCenter
        // progressBarColor: '#FF2E2E',
        progressBarColor: "#213a1b",
        buttons: [
          [
            `<button>${buttonText}</button>`,
            function(instance, toast) {
              instance.hide(
                {
                  transitionOut: "fadeOutUp"
                },
                toast,
                "buttonName"
              );
              $(path).modal({
                show: true,
                keyboard: false,
                backdrop: "static"
              });
            },
            true
          ],
          [
            "<button>Close</button>",
            function(instance, toast) {
              instance.hide(
                {
                  transitionOut: "fadeOutUp"
                },
                toast,
                "buttonName"
              );
            }
          ] // true to focus
        ]
        // onOpening: function(instance, toast) {},
        // onClosing: function(instance, toast, closedBy) {}
      });
    },
    showSuccessLoginNotification() {
      this.$toast.success(
        "Successfully Logged In!",
        "OK",
        this.notificationSystem.options.success
      );
    },
    showSuccessRegistrationNotification(statusText) {
      this.$toast.success(
        "*",
        statusText,
        this.notificationSystem.options.success
      );
    },
    showErrorLoginNotification(errorMessage) {
      this.$toast.error(
        `${errorMessage}`,
        "Error",
        this.notificationSystem.options.error
      );
    },
    showErrorRegistrationNotification(statusText) {
      this.$toast.error("*", statusText, this.notificationSystem.options.error);
    },
    showSuccessNotification(value) {
      console.log(value);
      this.$toast.success(
        value || "Operation successful!",
        "OK",
        this.notificationSystem.options.success
      );
    },
    showErrorNotification(value) {
      this.$toast.error(
        value || "Operation failed",
        "Error",
        this.notificationSystem.options.error
      );
    },
    showWarningNotification(statusText) {
      this.$toast.info(
        statusText,
        "Warning",
        this.notificationSystem.options.info
      );
    }
  }
};

export default notifications;

// $('#aptitude_test_instructions').modal({
// 	show: true,
// 	keyboard: false,
// 	backdrop: 'static'
// })

const data = [
  ['A', 'MOBILE', '11/11/19 13:19:31', '11/11/19 14:32:33', '01:13:02', '47.57', '$23.3', 3286500, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/11/19 14:59:52', '11/11/19 15:06:08', '00:06:16', '3.14', '$1.54', 3286588, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/11/19 16:36:50', '11/11/19 16:59:29', '00:22:39', '12.55', '$6.15', 3286675, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/11/19 17:34:05', '11/11/19 17:53:31', '00:19:26', '6.04', '$3.44', 3286738, 'DCCOMBOTYP1', 'CREDITCARD'],
  ['A', 'DEVICE', '11/11/19 18:30:44', '11/11/19 19:39:14', '01:08:30', '40.68', '$23.19', 3286770, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/11/19 21:14:06', '11/11/19 21:45:22', '00:31:16', '20.3', '$11.57', 3286854, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/11/19 21:54:35', '11/11/19 22:48:24', '00:53:49', '34.31', '$19.56', 3286877, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/12/19 07:11:59', '11/12/19 07:37:29', '00:25:30', '6.74', '$3.64', 3287211, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/12/19 08:11:26', '11/12/19 08:11:33', '00:00:07', '0.0', '$0.0', 3287298, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/12/19 08:11:55', '11/12/19 08:12:02', '00:00:07', '0.0', '$0.0', 3287300, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/12/19 08:12:40', '11/12/19 08:12:47', '00:00:07', '0.0', '$0.0', 3287302, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/12/19 08:13:24', '11/12/19 08:13:32', '00:00:08', '0.0', '$0.0', 3287303, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/12/19 10:35:03', '11/12/19 10:46:48', '00:11:45', '8.35', '$4.09', 3287474, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/12/19 11:05:28', '11/12/19 11:29:31', '00:24:03', '11.34', '$5.56', 3287500, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/12/19 13:51:46', '11/12/19 14:00:13', '00:08:27', '6.24', '$3.05', 3287709, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/12/19 14:29:33', '11/12/19 14:40:00', '00:10:27', '4.72', '$2.31', 3287748, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/12/19 14:41:46', '11/12/19 15:05:22', '00:23:36', '9.86', '$4.83', 3287764, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/12/19 15:20:03', '11/12/19 16:34:11', '01:14:08', '48.03', '$23.53', 3287814, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/12/19 16:43:15', '11/12/19 16:43:25', '00:00:10', '0.0', '$0.0', 3288966, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/12/19 16:43:40', '11/12/19 16:44:24', '00:00:44', '0.0', '$0.0', 3288969, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/12/19 16:46:25', '11/12/19 16:46:28', '00:00:03', '0.0', '$0.0', 3287911, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/12/19 17:07:12', '11/12/19 17:16:53', '00:09:41', '7.12', '$4.06', 3287935, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/12/19 17:40:21', '11/12/19 18:17:07', '00:36:46', '23.79', '$13.56', 3287962, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/12/19 18:55:37', '11/12/19 19:30:16', '00:34:39', '12.93', '$7.37', 3288015, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/12/19 19:34:25', '11/12/19 20:37:14', '01:02:49', '40.69', '$23.19', 3288044, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/12/19 20:50:33', '11/12/19 22:00:53', '01:10:20', '30.96', '$17.65', 3288082, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/13/19 06:34:16', '11/13/19 06:57:43', '00:23:27', '8.78', '$4.74', 3288572, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/13/19 07:49:02', '11/13/19 08:19:29', '00:30:27', '9.32', '$5.03', 3288745, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/13/19 10:59:03', '11/13/19 11:09:30', '00:10:27', '7.04', '$3.45', 3289123, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/13/19 11:10:53', '11/13/19 11:37:30', '00:26:37', '12.93', '$6.34', 3289163, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/13/19 12:57:50', '11/13/19 13:22:27', '00:24:37', '17.75', '$8.7', 3289363, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/13/19 13:46:53', '11/13/19 13:56:25', '00:09:32', '4.68', '$2.29', 3289431, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/13/19 14:03:03', '11/13/19 14:34:19', '00:31:16', '11.28', '$5.53', 3289464, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/13/19 14:44:49', '11/13/19 15:21:07', '00:36:18', '13.55', '$6.64', 3289538, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/13/19 15:22:48', '11/13/19 15:41:09', '00:18:21', '8.24', '$4.04', 3289590, 'DCCOMBOTYP1', 'CREDITCARD'],
  ['A', 'MOBILE', '11/13/19 16:04:54', '11/13/19 17:21:10', '01:16:16', '47.06', '$23.06', 3289658, 'DCCOMBOTYP1', 'RFID'],
  ['A', 'DEVICE', '11/13/19 17:57:19', '11/13/19 18:39:26', '00:42:07', '21.56', '$12.29', 3289789, 'DCCOMBOTYP1', 'CREDITCARD'],
  ['A', 'MOBILE', '11/13/19 20:09:22', '11/13/19 20:19:23', '00:10:01', '7.15', '$4.08', 3289886, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/13/19 21:51:35', '11/13/19 21:59:56', '00:08:21', '6.18', '$3.52', 3289926, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/13/19 22:06:47', '11/13/19 22:16:53', '00:10:06', '7.57', '$4.09', 3289930, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/14/19 04:48:46', '11/14/19 05:07:22', '00:18:36', '7.07', '$3.82', 3290165, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/14/19 07:39:44', '11/14/19 08:11:01', '00:31:17', '10.3', '$5.56', 3290540, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/14/19 09:34:21', '11/14/19 09:50:01', '00:15:40', '10.17', '$4.98', 3290767, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/14/19 11:05:36', '11/14/19 11:35:10', '00:29:34', '11.82', '$5.79', 3290932, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/14/19 11:36:12', '11/14/19 11:45:34', '00:09:22', '5.32', '$2.61', 3290981, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/14/19 12:58:45', '11/14/19 13:30:02', '00:31:17', '12.09', '$5.92', 3291151, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/14/19 15:46:11', '11/14/19 16:17:27', '00:31:16', '18.13', '$8.88', 3291399, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/14/19 16:58:13', '11/14/19 17:29:30', '00:31:17', '11.0', '$5.39', 3291489, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/14/19 18:24:10', '11/14/19 18:46:00', '00:21:50', '14.55', '$8.29', 3291607, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/14/19 18:48:27', '11/14/19 19:13:44', '00:25:17', '13.33', '$7.6', 3291637, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/14/19 20:04:42', '11/14/19 20:35:59', '00:31:17', '13.23', '$7.54', 3291713, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/14/19 21:24:16', '11/14/19 21:24:23', '00:00:07', '0.0', '$0.0', 3291746, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/14/19 21:30:51', '11/14/19 22:02:13', '00:31:22', '8.39', '$4.78', 3291750, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/15/19 03:58:42', '11/15/19 04:25:25', '00:26:43', '18.97', '$10.24', 3291905, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/15/19 04:44:12', '11/15/19 05:15:29', '00:31:17', '11.92', '$6.44', 3291978, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/15/19 07:27:06', '11/15/19 07:58:23', '00:31:17', '8.65', '$4.67', 3292364, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/15/19 08:07:52', '11/15/19 09:07:38', '00:59:46', '39.34', '$21.24', 3292473, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/15/19 10:39:42', '11/15/19 11:29:31', '00:49:49', '33.86', '$16.59', 3292794, 'DCCOMBOTYP1', 'RFID'],
  ['A', 'MOBILE', '11/15/19 11:48:51', '11/15/19 12:15:29', '00:26:38', '9.54', '$4.67', 3292933, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/15/19 12:25:49', '11/15/19 12:57:05', '00:31:16', '10.35', '$5.07', 3292996, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/15/19 14:56:40', '11/15/19 15:18:29', '00:21:49', '11.1', '$5.44', 3293249, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/15/19 16:04:52', '11/15/19 16:33:48', '00:28:56', '2.56', '$1.25', 3293441, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/15/19 20:29:59', '11/15/19 20:32:49', '00:02:50', '1.82', '$1.04', 3294185, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/15/19 21:19:40', '11/15/19 21:24:34', '00:04:54', '3.48', '$1.98', 3294224, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/15/19 22:31:30', '11/15/19 22:49:18', '00:17:48', '8.96', '$4.84', 3294251, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/15/19 22:51:41', '11/15/19 23:22:58', '00:31:17', '8.19', '$4.42', 3294256, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/16/19 04:50:42', '11/16/19 05:22:00', '00:31:18', '4.89', '$2.64', 3294463, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/16/19 06:23:34', '11/16/19 07:23:17', '00:59:43', '23.54', '$12.71', 3294659, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/16/19 08:46:30', '11/16/19 09:07:05', '00:20:35', '4.75', '$2.56', 3295370, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/16/19 10:23:56', '11/16/19 11:18:06', '00:54:10', '34.45', '$16.88', 3295545, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/16/19 11:22:26', '11/16/19 11:46:14', '00:23:48', '15.44', '$7.57', 3295683, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/16/19 12:22:37', '11/16/19 12:53:53', '00:31:16', '10.82', '$5.3', 3295793, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/16/19 13:20:46', '11/16/19 13:47:07', '00:26:21', '9.32', '$4.57', 3295908, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/16/19 13:48:44', '11/16/19 14:05:55', '00:17:11', '12.58', '$6.16', 3295989, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/16/19 14:08:47', '11/16/19 14:39:40', '00:30:53', '22.28', '$10.92', 3296044, 'DCCOMBOTYP1', 'RFID'],
  ['A', 'DEVICE', '11/16/19 14:41:28', '11/16/19 15:12:45', '00:31:17', '7.43', '$3.64', 3296115, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/16/19 15:16:30', '11/16/19 15:52:33', '00:36:03', '20.05', '$9.82', 3296168, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/16/19 16:43:12', '11/16/19 16:43:16', '00:00:04', '0.0', '$0.0', 3296284, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/16/19 17:02:36', '11/16/19 18:28:25', '01:25:49', '52.44', '$29.89', 3296322, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/16/19 18:33:50', '11/16/19 18:33:56', '00:00:06', '0.0', '$0.0', 3296512, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/16/19 18:34:50', '11/16/19 18:46:07', '00:11:17', '8.13', '$4.63', 3296516, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/16/19 19:37:25', '11/16/19 20:03:44', '00:26:19', '15.54', '$8.86', 3296649, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/16/19 20:48:35', '11/16/19 21:29:06', '00:40:31', '7.15', '$4.08', 3296776, 'DCCOMBOTYP1', 'RFID'],
  ['A', 'MOBILE', '11/17/19 00:02:31', '11/17/19 00:33:48', '00:31:17', '9.41', '$5.08', 3296902, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/17/19 07:30:31', '11/17/19 07:54:02', '00:23:31', '7.23', '$3.9', 3297096, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/17/19 09:24:30', '11/17/19 09:55:47', '00:31:17', '12.8', '$6.27', 3297243, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/17/19 10:42:05', '11/17/19 11:46:04', '01:03:59', '38.86', '$19.04', 3297331, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/17/19 14:02:48', '11/17/19 15:11:02', '01:08:14', '51.84', '$25.4', 3297592, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/17/19 15:32:28', '11/17/19 15:38:34', '00:06:06', '4.27', '$2.09', 3297694, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/17/19 17:57:53', '11/17/19 18:10:23', '00:12:30', '9.11', '$5.19', 3297826, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/17/19 18:41:56', '11/17/19 19:49:06', '01:07:10', '18.43', '$10.51', 3297853, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/18/19 01:07:22', '11/18/19 01:19:38', '00:12:16', '7.15', '$3.86', 3298630, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/18/19 06:31:46', '11/18/19 06:50:46', '00:19:00', '8.33', '$4.5', 3298726, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/18/19 07:02:54', '11/18/19 09:24:44', '02:21:50', '62.65', '$33.83', 3298750, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/18/19 13:10:19', '11/18/19 13:32:31', '00:22:12', '2.48', '$1.22', 3299185, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/18/19 14:56:23', '11/18/19 15:27:40', '00:31:17', '10.72', '$5.25', 3299311, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/18/19 16:02:13', '11/18/19 16:23:58', '00:21:45', '15.79', '$7.74', 3299386, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/18/19 17:40:46', '11/18/19 18:31:28', '00:50:42', '33.6', '$19.15', 3299471, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/18/19 19:20:30', '11/18/19 19:51:46', '00:31:16', '10.37', '$5.91', 3299534, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/18/19 20:10:41', '11/18/19 20:22:46', '00:12:05', '6.65', '$3.79', 3299577, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/18/19 20:40:58', '11/18/19 21:01:27', '00:20:29', '13.1', '$7.47', 3299594, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/18/19 21:24:07', '11/18/19 21:25:59', '00:01:52', '0.0', '$0.0', 3299606, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/18/19 21:29:54', '11/18/19 22:22:20', '00:52:26', '34.44', '$19.63', 3299610, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/19/19 06:27:54', '11/19/19 06:36:06', '00:08:12', '3.95', '$2.13', 3300072, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/19/19 07:46:10', '11/19/19 08:56:17', '01:10:07', '50.14', '$27.08', 3300249, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/19/19 10:20:15', '11/19/19 10:36:46', '00:16:31', '8.72', '$4.27', 3300497, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/19/19 10:53:36', '11/19/19 11:19:42', '00:26:06', '17.35', '$8.5', 3300554, 'DCCOMBOTYP1', 'CREDITCARD'],
  ['A', 'DEVICE', '11/19/19 13:37:48', '11/19/19 14:09:04', '00:31:16', '19.23', '$9.42', 3300819, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/19/19 14:49:25', '11/19/19 15:20:42', '00:31:17', '13.36', '$6.55', 3300902, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/19/19 15:25:42', '11/19/19 15:46:07', '00:20:25', '5.86', '$2.87', 3300949, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/19/19 16:15:18', '11/19/19 16:26:26', '00:11:08', '8.24', '$4.04', 3301009, 'CHADEMO', 'RFID'],
  ['A', 'DEVICE', '11/19/19 17:25:31', '11/19/19 17:43:53', '00:18:22', '4.18', '$2.38', 3301073, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/19/19 19:10:33', '11/19/19 19:41:50', '00:31:17', '9.76', '$5.56', 3301158, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/19/19 21:08:57', '11/19/19 22:04:03', '00:55:06', '14.0', '$7.98', 3301229, 'DCCOMBOTYP1', 'CREDITCARD'],
  ['A', 'MOBILE', '11/19/19 22:41:09', '11/19/19 23:12:26', '00:31:17', '9.7', '$5.24', 3301249, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/20/19 06:16:16', '11/20/19 06:41:03', '00:24:47', '10.97', '$5.92', 3301634, 'CHADEMO', 'CREDITCARD'],
  ['A', 'DEVICE', '11/20/19 06:44:05', '11/20/19 07:15:22', '00:31:17', '17.24', '$9.31', 3301694, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/20/19 07:30:36', '11/20/19 08:01:53', '00:31:17', '12.49', '$6.74', 3301806, 'CHADEMO', 'RFID'],
  ['A', 'MOBILE', '11/20/19 09:49:52', '11/20/19 10:09:14', '00:19:22', '13.81', '$6.77', 3302033, 'CHADEMO', 'CREDITCARD'],
  ['A', 'MOBILE', '11/20/19 13:30:52', '11/20/19 14:16:45', '00:45:53', '31.67', '$15.51', 3302406, 'DCCOMBOTYP1', 'RFID']];

module.exports = { data };

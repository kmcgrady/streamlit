/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { EventEmitter } from "events"

import Dispatcher from "./dispatcher"
import Constants from "./constants"
import getSidebarNavItems from "../data/sidebar-nav-items"

let _store = {
  menuVisible: false,
  navItems: getSidebarNavItems(),
}

class Store extends EventEmitter {
  constructor() {
    super()

    this.registerToActions = this.registerToActions.bind(this)
    this.toggleSidebar = this.toggleSidebar.bind(this)

    Dispatcher.register(this.registerToActions.bind(this))
  }

  registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.TOGGLE_SIDEBAR:
        this.toggleSidebar()
        break
      default:
    }
  }

  toggleSidebar() {
    _store.menuVisible = !_store.menuVisible
    this.emit(Constants.CHANGE)
  }

  getMenuState() {
    return _store.menuVisible
  }

  getSidebarItems() {
    return _store.navItems
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback)
  }
}

export default new Store()

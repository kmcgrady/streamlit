# Copyright 2018-2021 Streamlit Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import streamlit as st

w1 = st.slider("Label 1", 0, 100, 25, 1)
st.write("Value 1:", w1)

w2 = st.slider("Label 2", 0.0, 100.0, (25.0, 75.0), 0.5)
st.write("Value 2:", w2)

# st.session_state() can only run in streamlit
if st._is_running_with_streamlit:
    state = st.beta_session_state(slider_changed=False)

    def slider_change(new_value):
        state.slider_changed = True

    w3 = st.slider("Label 3", 0.0, 100.0, (25.0, 75.0), 0.5, on_change=slider_change)
    st.write("Value 3:", w3)
    st.write("Slider Changed:", state.slider_changed)

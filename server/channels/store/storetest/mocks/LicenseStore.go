// Code generated by mockery v2.42.2. DO NOT EDIT.

// Regenerate this file using `make store-mocks`.

package mocks

import (
	model "github.com/mattermost/mattermost/server/public/model"
	request "github.com/mattermost/mattermost/server/public/shared/request"
	mock "github.com/stretchr/testify/mock"
)

// LicenseStore is an autogenerated mock type for the LicenseStore type
type LicenseStore struct {
	mock.Mock
}

// Get provides a mock function with given fields: c, id
func (_m *LicenseStore) Get(c request.CTX, id string) (*model.LicenseRecord, error) {
	ret := _m.Called(c, id)

	if len(ret) == 0 {
		panic("no return value specified for Get")
	}

	var r0 *model.LicenseRecord
	var r1 error
	if rf, ok := ret.Get(0).(func(request.CTX, string) (*model.LicenseRecord, error)); ok {
		return rf(c, id)
	}
	if rf, ok := ret.Get(0).(func(request.CTX, string) *model.LicenseRecord); ok {
		r0 = rf(c, id)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*model.LicenseRecord)
		}
	}

	if rf, ok := ret.Get(1).(func(request.CTX, string) error); ok {
		r1 = rf(c, id)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetAll provides a mock function with given fields:
func (_m *LicenseStore) GetAll() ([]*model.LicenseRecord, error) {
	ret := _m.Called()

	if len(ret) == 0 {
		panic("no return value specified for GetAll")
	}

	var r0 []*model.LicenseRecord
	var r1 error
	if rf, ok := ret.Get(0).(func() ([]*model.LicenseRecord, error)); ok {
		return rf()
	}
	if rf, ok := ret.Get(0).(func() []*model.LicenseRecord); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*model.LicenseRecord)
		}
	}

	if rf, ok := ret.Get(1).(func() error); ok {
		r1 = rf()
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Save provides a mock function with given fields: license
func (_m *LicenseStore) Save(license *model.LicenseRecord) error {
	ret := _m.Called(license)

	if len(ret) == 0 {
		panic("no return value specified for Save")
	}

	var r0 error
	if rf, ok := ret.Get(0).(func(*model.LicenseRecord) error); ok {
		r0 = rf(license)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// NewLicenseStore creates a new instance of LicenseStore. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewLicenseStore(t interface {
	mock.TestingT
	Cleanup(func())
}) *LicenseStore {
	mock := &LicenseStore{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
